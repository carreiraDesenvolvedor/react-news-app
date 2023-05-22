import {
  API_METHOD,
  IApiResponse,
  sendApiMutationRequest,
} from '../sendApiRequest';

export interface IApiAuthLoginUserPayload {
  password: string;
  email: string;
}

interface Response {
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
}: IApiResponse<Response>) => {
  return sendApiMutationRequest<
    IApiAuthLoginUserPayload,
    Response
  >({
    path: 'auth/login',
    method: API_METHOD.POST,
    onSuccess,
    onError,
  });
};
