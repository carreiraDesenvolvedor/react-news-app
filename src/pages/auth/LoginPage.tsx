import React, { FC, ReactElement } from 'react';
import { AuthLayout } from '../../layouts/auth/';
import { AuthHeader } from './_auth-header';

export const LoginPage: FC = (): ReactElement => {
  return (
    <AuthLayout>
      <AuthHeader />
      <h1>Login Page Here</h1>
    </AuthLayout>
  );
};
