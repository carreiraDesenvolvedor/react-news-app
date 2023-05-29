import React, { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteGuard } from '../utils/RouteGuard';
import { EnumSessionRoutesPaths } from './enum/session-routes-paths';
import { HomePage } from '../pages/logged/HomePage';
import ArticleProvider from '../context/article';

export const SessionRoutes: FC = (): ReactElement => {
  return (
    <Routes>
      <Route element={<RouteGuard />}>
        <Route
          path={EnumSessionRoutesPaths.home}
          element={
            <ArticleProvider>
              <HomePage />
            </ArticleProvider>
          }
        />
      </Route>
    </Routes>
  );
};
