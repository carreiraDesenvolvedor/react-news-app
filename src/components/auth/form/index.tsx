import { Box, Button, Stack } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { AuthFormHeader, IAuthFormHeader } from './_header';
import {
  AuthFormTextField,
  IAuthFormTextField,
} from './_text-field';

interface IAuthForm extends IAuthFormHeader {
  form_fields: IAuthFormTextField[];
}

export const AuthForm: FC<IAuthForm> = ({
  header_title,
  header_cta,
  form_fields,
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
            />
          ))}
          <Button
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            type={'submit'}
            variant="contained"
          >
            Continue
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
