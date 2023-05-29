import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { EnumAuthRoutesPaths } from '../routes/enum/auth-routes-paths';
import { ApiEndpoints } from './apiEndpoints';
import { authCookie } from '../utils/cookie/authCookie';

export enum API_METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const getAuthorizationHeaders = (path: string): object => {
  if (
    [
      ApiEndpoints.auth.login,
      ApiEndpoints.auth.register,
    ].includes(path)
  ) {
    return {};
  }

  const user = authCookie().retrieve();

  return {
    Authorization: `${user.authorization.type} ${user.authorization.token}`,
  };
};

const buildInitRequestParm = (
  method: API_METHOD,
  data: unknown,
  path: string,
): RequestInit => {
  const authHeaders = getAuthorizationHeaders(path);
  return {
    method: method,
    body:
      method != API_METHOD.GET && data
        ? JSON.stringify(data)
        : null,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...authHeaders,
    },
  };
};

const getURLSearchParams = <T>(data: T) => {
  const keys = Object.keys(data as object) as Array<
    keyof T
  >;
  const urlSearchParams = new URLSearchParams();
  keys.map((key) => {
    urlSearchParams.append(
      key as string,
      data[key] as string,
    );
  });
  return urlSearchParams.toString();
};

export const makeRequest = <T>(
  path: string,
  method: API_METHOD,
  data: T,
) => {
  let URL = `${process.env.REACT_APP_API_URL}/${path}`;
  if (method === API_METHOD.GET) {
    URL += '?' + <T>getURLSearchParams(data);
  }
  return fetch(
    URL,
    buildInitRequestParm(method, data, path),
  );
};

export interface IApiResponse<ResponseSuccessInterface> {
  onError: (error: {
    data: { [index: string]: string };
    message: string;
    status: number;
  }) => void;
  onSuccess: (response: {
    data: ResponseSuccessInterface;
    message?: string;
  }) => void;
}

interface ISendApiMutationRequest<ResponseSuccessInterface>
  extends IApiResponse<ResponseSuccessInterface> {
  path: string;
  method: API_METHOD;
}

export const sendApiMutationRequest = <
  Payload,
  ResponseSuccessInterface,
>({
  path,
  method,
  onSuccess,
  onError,
}: ISendApiMutationRequest<ResponseSuccessInterface>) => {
  const navigate = useNavigate();
  return useMutation(
    (data: Payload) => {
      return makeRequest(path, method, data);
    },
    {
      onSuccess: async (data: Response) => {
        const response = await data.json();
        if (data.ok) {
          onSuccess({
            data: response.data as ResponseSuccessInterface,
            message: response.message,
          });
        } else {
          if (data.status == 401) {
            navigate(
              `${EnumAuthRoutesPaths.login.replace(
                ':messages',
                response.data.join(','),
              )}}`,
            );
            return;
          }
          onError({
            data: response.data,
            message: response.message,
            status: data.status,
          });
        }
      },
      onError: onError,
    },
  );
};
