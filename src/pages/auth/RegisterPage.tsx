import React, { FC, ReactElement } from 'react';
import { AuthLayout } from '../../layouts/auth';
import { AuthForm } from '../../components/auth/form';
import { EnumAuthRoutesPaths } from '../../routes/AuthRoutes';

export const RegisterPage: FC = (): ReactElement => {
  const handleFieldChange = (
    event: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement
    >,
  ) => {
    console.log(event.target.name, ' ', event.target.value);
  };
  return (
    <AuthLayout>
      <AuthForm
        header_title="Register"
        header_cta={{
          call: 'Already have an account?',
          link_text: 'Login',
          link_to: EnumAuthRoutesPaths.login,
        }}
        form_fields={[
          {
            name: 'name',
            label: 'Name',
            type: 'text',
            onChange: handleFieldChange,
          },
          {
            name: 'email',
            label: 'E-mail',
            type: 'email',
            onChange: handleFieldChange,
          },
          {
            name: 'password',
            label: 'Password',
            type: 'password',
            onChange: handleFieldChange,
          },
        ]}
      />
    </AuthLayout>
  );
};
