import React, { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';

export enum EnumAuthRoutesPaths {
  login = '/',
  register = '/register',
}

export const AuthRoutes: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
