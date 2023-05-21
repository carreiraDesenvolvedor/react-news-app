import {
  Box,
  Button,
  LinearProgress,
  Stack,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { AuthFormHeader, IAuthFormHeader } from './_header';
import {
  AuthFormTextField,
  IAuthFormTextField,
} from './_text-field';
import { IInnerAlert, InnerAlert } from '../../inner-alert';

interface IAuthForm extends IAuthFormHeader {
  form_fields: IAuthFormTextField[];
  handleOnSubmitForm: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  inner_alerts?: IInnerAlert[];
  isLoading?: boolean;
}

export const AuthForm: FC<IAuthForm> = ({
  header_title,
  header_cta,
  form_fields,
  handleOnSubmitForm,
  inner_alerts,
  isLoading = false,
}): ReactElement => {
  return (
    <Box maxWidth="550px" width="100%" py={'100px'} px={3}>
      <AuthFormHeader
        header_title={header_title}
        header_cta={header_cta}
      />
      <form noValidate>
        <Stack spacing={3}>
          {form_fields.map((field, key) => (
            <AuthFormTextField
              key={key}
              name={field.name}
              label={field.label}
              type={field.type}
              onChange={field.onChange}
              disabled={isLoading}
            />
          ))}
          <Button
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            type={'submit'}
            variant="contained"
            onClick={handleOnSubmitForm}
            disabled={isLoading}
          >
            Continue
          </Button>
          {isLoading && <LinearProgress />}
          {Array.isArray(inner_alerts) &&
            inner_alerts.length > 0 &&
            inner_alerts.map((alert, key) => (
              <InnerAlert
                key={key}
                color={alert.color}
                severity={alert.severity}
                message={alert.message}
              />
            ))}
        </Stack>
      </form>
    </Box>
  );
};
