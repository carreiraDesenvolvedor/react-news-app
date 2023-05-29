import { ApiEndpoints } from '../apiEndpoints';
import {
  API_METHOD,
  IApiResponse,
  sendApiMutationRequest,
} from '../sendApiRequest';

export interface IApiArticlesFindPayload {
  keywords: string[];
  page?: number;
}

export type IApiArticlesFindResponse = {
  author: string;
  description: string;
  publishedAt: number;
  source: {
    name: string;
    id: string;
  };
  title: string;
  urlArticle: string;
  urlThumbnail: string;
}[];

export const apiArticlesFind = ({
  onSuccess,
  onError,
}: IApiResponse<IApiArticlesFindResponse>) => {
  return sendApiMutationRequest<
    IApiArticlesFindPayload,
    IApiArticlesFindResponse
  >({
    path: ApiEndpoints.article.find,
    method: API_METHOD.GET,
    onSuccess,
    onError,
  });
};
