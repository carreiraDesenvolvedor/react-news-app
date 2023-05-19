import React, { FC, ReactElement } from 'react';
import { AuthLayout } from '../../layouts/auth/';
import { AuthForm } from '../../components/auth/form';
import { EnumAuthRoutesPaths } from '../../routes/AuthRoutes';

export const LoginPage: FC = (): ReactElement => {
  const handleOnSubmitForm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    alert('onSumit');
  };

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
        header_title="Login"
        header_cta={{
          call: "Don't have an account?",
          link_text: 'Register',
          link_to: EnumAuthRoutesPaths.register,
        }}
        form_fields={[
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
        handleOnSubmitForm={handleOnSubmitForm}
      />
    </AuthLayout>
  );
};
