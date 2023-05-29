import { ApiEndpoints } from '../apiEndpoints';
import {
  API_METHOD,
  IApiResponse,
  sendApiMutationRequest,
} from '../sendApiRequest';

export interface IApiAuthLoginUserPayload {
  password: string;
  email: string;
}

export interface IApiAuthLoginUserResponse {
  user: {
    name: string;
    email: string;
    id: number;
    created_at: Date;
  };
  authorization: {
    token: string;
    type: 'bearer';
  };
}

export const apiAuthLoginUser = ({
  onSuccess,
  onError,
}: IApiResponse<IApiAuthLoginUserResponse>) => {
  return sendApiMutationRequest<
    IApiAuthLoginUserPayload,
    IApiAuthLoginUserResponse
  >({
    path: ApiEndpoints.auth.login,
    method: API_METHOD.POST,
    onSuccess,
    onError,
  });
};
