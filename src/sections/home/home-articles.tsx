import { Unstable_Grid2 as Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { IApiArticlesFindResponse } from '../../api/article/find';
import { ArticleCard } from '../../components/article-card';

interface ISectionHomeArticles {
  articles?: IApiArticlesFindResponse;
}

export const SectionHomeArticles: FC<
  ISectionHomeArticles
> = ({ articles }): ReactElement => {
  return (
    <Grid container spacing={3}>
      {articles &&
        articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            publishedAt={article.publishedAt}
            source={article.source.name}
            url={article.urlArticle}
          />
        ))}
    </Grid>
  );
};
