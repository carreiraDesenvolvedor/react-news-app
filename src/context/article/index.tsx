import React, {
  createContext,
  FC,
  ReactNode,
  useState,
} from 'react';
import { IApiArticlesFindPayload } from '../../api/article/find';

interface IArticleContextState {
  form: {
    keywords: string;
  };
  articles?: IApiArticlesFindPayload[];
}

export type IArticleContext = {
  state: IArticleContextState;
  updateState: (newData: IArticleContextState) => void;
};

export const ArticleContext =
  createContext<IArticleContext | null>(null);

type Props = {
  children?: ReactNode;
};

const emptyState: IArticleContextState = {
  form: {
    keywords: '',
  },
  articles: [],
};

const ArticleProvider: FC<Props> = ({ children }) => {
  const [state, setState] =
    useState<IArticleContextState>(emptyState);

  const updateState = (newData: IArticleContextState) => {
    setState({
      ...state,
      ...newData,
    });
  };

  return (
    <ArticleContext.Provider
      value={{
        state,
        updateState,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
