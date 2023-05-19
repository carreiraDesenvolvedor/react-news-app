import React, { FC, ReactElement } from 'react';
import { AuthLayout } from '../../layouts/auth/';
import { AuthForm } from '../../components/auth/form';
import { EnumAuthRoutesPaths } from '../../routes/AuthRoutes';

export const LoginPage: FC = (): ReactElement => {
  return (
    <AuthLayout>
      <AuthForm
        header_title="Login"
        header_cta={{
          call: "Don't have an account?",
          link_text: 'Register',
          link_to: EnumAuthRoutesPaths.register,
        }}
      />
    </AuthLayout>
  );
};
