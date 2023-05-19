import React, { FC, ReactElement } from 'react';
import { AuthLayout } from '../../layouts/auth/';

export const LoginPage: FC = (): ReactElement => {
  return (
    <AuthLayout>
      <h1>Login Page Here</h1>
    </AuthLayout>
  );
};
