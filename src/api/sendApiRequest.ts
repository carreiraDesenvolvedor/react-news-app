import { useMutation } from '@tanstack/react-query';

export enum API_METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const buildInitRequestParm = (
  method: API_METHOD,
  data: unknown,
): RequestInit => {
  return {
    method: method,
    body:
      method != API_METHOD.GET && data
        ? JSON.stringify(data)
        : null,
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

// export const sendApiRequest = async <T>(
//   path: string,
//   method: API_METHOD,
//   data: T,
// ): Promise<T> => {
//   const response = await fetch(
//     `${process.env.REACT_APP_API_URL}/${path}`,
//     buildInitRequestParm(method, data),
//   );

//   if (!response.ok) {
//     throw new Error(res);
//   }

//   return (await response.json()) as Promise<T>;
// };

export const makeRequest = <T>(
  path: string,
  method: API_METHOD,
  data: T,
) =>
  fetch(
    `${process.env.REACT_APP_API_URL}/${path}`,
    buildInitRequestParm(method, data),
  );

export interface IApiResponse<ResponseSuccessInterface> {
  onError: (error: {
    data: { [index: string]: string };
    message: string;
    status: number;
  }) => void;
  onSuccess: (response: {
    data: ResponseSuccessInterface;
    message: string;
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
