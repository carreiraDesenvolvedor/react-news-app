import {
  API_METHOD,
  IApiResponse,
  sendApiMutationRequest,
} from '../sendApiRequest';

export interface IApiAuthRegisterUserPayload {
  name: string;
  email: string;
  password: string;
}

interface Response {
  user: {
    name: string;
    email: string;
    id: number;
  };
}

export const apiAuthRegisterUser = ({
  onSuccess,
  onError,
}: IApiResponse<Response>) => {
  return sendApiMutationRequest<
    IApiAuthRegisterUserPayload,
    Response
  >({
    path: 'auth/register',
    method: API_METHOD.POST,
    onSuccess,
    onError,
  });
};
