import React, { FC, ReactElement, useContext } from 'react';
import { AuthLayout } from '../../layouts/auth';
import { AuthForm } from '../../components/auth/form';
import { EnumAuthRoutesPaths } from '../../routes/AuthRoutes';
import {
  apiAuthRegisterUser,
  IApiAuthRegisterUserPayload,
} from '../../api/auth/RegisterUser';
import { IInnerAlert } from '../../components/inner-alert';
import {
  AuthContext,
  IAuthContext,
} from '../../context/auth';

export const RegisterPage: FC = (): ReactElement => {
  const { authenticateUser } = useContext(
    AuthContext,
  ) as IAuthContext;

  const [bottomAlerts, setBottomAlerts] = React.useState<
    IInnerAlert[]
  >([]);
  const [formState, setFormState] =
    React.useState<IApiAuthRegisterUserPayload>({
      name: '',
      password: '',
      email: '',
    });
  const registerMutation = apiAuthRegisterUser({
    onSuccess: ({ data }) => {
      authenticateUser({
        name: data.user.name,
        authorization: data.authorization,
      });
    },
    onError: (error) => {
      const alerts: IInnerAlert[] = [];
      Object.keys(error.data).map((key: string) => {
        alerts.push({
          color: 'error',
          severity: 'error',
          message: <div>{error.data[key]}</div>,
        });
      });
      setBottomAlerts(alerts);
    },
  });

  const handleOnSubmitForm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setBottomAlerts([]);
    registerMutation.mutate(formState);
  };

  const handleFormChange = <
    Property extends keyof IApiAuthRegisterUserPayload,
  >(
    key: Property,
    value: IApiAuthRegisterUserPayload[Property],
  ): void => {
    setFormState({ ...formState, [key]: value });
  };
  return (
    <AuthLayout>
      <AuthForm
        isLoading={registerMutation.isLoading}
        handleOnSubmitForm={handleOnSubmitForm}
        header_title="Register"
        header_cta={{
          call: 'Already have an account?',
          link_text: 'Login',
          link_to: EnumAuthRoutesPaths.login,
        }}
        inner_alerts={bottomAlerts}
        form_fields={[
          {
            name: 'name',
            label: 'Name',
            type: 'text',
            onChange: (e) => {
              handleFormChange('name', e.target.value);
            },
            required: true,
          },
          {
            name: 'email',
            label: 'E-mail',
            type: 'email',
            onChange: (e) => {
              handleFormChange('email', e.target.value);
            },
            required: true,
          },
          {
            name: 'password',
            label: 'Password',
            type: 'password',
            onChange: (e) => {
              handleFormChange('password', e.target.value);
            },
            required: true,
          },
        ]}
      />
    </AuthLayout>
  );
};
