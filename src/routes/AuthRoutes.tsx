import React, { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';
import { EnumAuthRoutesPaths } from './enum/auth-routes-paths';
import { RouteGuard } from '../utils/RouteGuard';

export const AuthRoutes: FC = (): ReactElement => {
  return (
    <Routes>
      <Route element={<RouteGuard />}>
        <Route
          path={EnumAuthRoutesPaths.login}
          element={<LoginPage />}
        />
        <Route
          path={EnumAuthRoutesPaths.register}
          element={<RegisterPage />}
        />
      </Route>
    </Routes>
  );
};
