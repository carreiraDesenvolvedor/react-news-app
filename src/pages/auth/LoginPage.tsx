import React, { FC, ReactElement } from 'react';
import { AuthLayout } from '../../layouts/auth/';
import { AuthHeader } from './_auth-header';
import { AuthForm } from './_auth-form';

export const LoginPage: FC = (): ReactElement => {
  return (
    <AuthLayout>
      <AuthHeader />
      <AuthForm />
    </AuthLayout>
  );
};
