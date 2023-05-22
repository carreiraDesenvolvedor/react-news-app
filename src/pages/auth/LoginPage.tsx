import React, { FC, ReactElement, useContext } from 'react';
import { AuthLayout } from '../../layouts/auth/';
import { AuthForm } from '../../components/auth/form';
import { EnumAuthRoutesPaths } from '../../routes/AuthRoutes';
import { IInnerAlert } from '../../components/inner-alert';
import {
  IApiAuthLoginUserPayload,
  apiAuthLoginUser,
} from '../../api/auth/LoginUser';
import {
  AuthContext,
  IAuthContext,
} from '../../context/auth';

export const LoginPage: FC = (): ReactElement => {
  const { authenticateUser } = useContext(
    AuthContext,
  ) as IAuthContext;

  const [formState, setFormState] =
    React.useState<IApiAuthLoginUserPayload>({
      password: '',
      email: '',
    });
  const [bottomAlerts, setBottomAlerts] = React.useState<
    IInnerAlert[]
  >([]);

  const handleOnSubmitForm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setBottomAlerts([]);
    loginMutation.mutate(formState);
  };

  const loginMutation = apiAuthLoginUser({
    onSuccess: ({ data }) => {
      authenticateUser({
        // id: data.user.id,
        name: data.user.name,
        // email: 'dsa',
        authorization: data.authorization,
      });
      console.log('onSuccess');
      console.log(data);
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

  const handleFormChange = <
    Property extends keyof IApiAuthLoginUserPayload,
  >(
    key: Property,
    value: IApiAuthLoginUserPayload[Property],
  ): void => {
    setFormState({ ...formState, [key]: value });
  };
  return (
    <AuthLayout>
      <AuthForm
        isLoading={loginMutation.isLoading}
        inner_alerts={bottomAlerts}
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
            onChange: (e) => {
              handleFormChange('email', e.target.value);
            },
            disabled: loginMutation.isLoading,
          },
          {
            name: 'password',
            label: 'Password',
            type: 'password',
            onChange: (e) => {
              handleFormChange('password', e.target.value);
            },
            disabled: loginMutation.isLoading,
          },
        ]}
        handleOnSubmitForm={handleOnSubmitForm}
      />
    </AuthLayout>
  );
};
