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

export interface IApiAuthRegisterUserResponse {
  name: string;
  email: string;
  id: number;
}

export const apiAuthRegisterUser = ({
  onSuccess,
  onError,
}: IApiResponse<IApiAuthRegisterUserResponse>) => {
  return sendApiMutationRequest<
    IApiAuthRegisterUserPayload,
    IApiAuthRegisterUserResponse
  >({
    path: 'auth/register',
    method: API_METHOD.POST,
    onSuccess,
    onError,
  });
};
