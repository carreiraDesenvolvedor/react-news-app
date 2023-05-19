import React, { FC, ReactElement } from 'react';
import { AuthLayout } from '../../layouts/auth/';
import { AuthForm } from '../../components/auth/form';

export const LoginPage: FC = (): ReactElement => {
  return (
    <AuthLayout>
      <AuthForm />
    </AuthLayout>
  );
};
