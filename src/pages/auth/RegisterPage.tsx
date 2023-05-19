import React, { FC, ReactElement } from 'react';
import { AuthLayout } from '../../layouts/auth';
import { AuthForm } from '../../components/auth/form';
import { EnumAuthRoutesPaths } from '../../routes/AuthRoutes';

export const RegisterPage: FC = (): ReactElement => {
  return (
    <AuthLayout>
      <AuthForm
        header_title="Register"
        header_cta={{
          call: 'Already have an account?',
          link_text: 'Login',
          link_to: EnumAuthRoutesPaths.login,
        }}
      />
    </AuthLayout>
  );
};
