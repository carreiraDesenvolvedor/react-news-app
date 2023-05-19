import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { AuthFormHeader, IAuthFormHeader } from './_header';
import { EnumAuthRoutesPaths } from '../../../routes/AuthRoutes';

interface IAuthForm extends IAuthFormHeader {}

export const AuthForm: FC<IAuthForm> = ({
  header_title,
  header_cta,
}): ReactElement => {
  return (
    <Box maxWidth="550px" width="100%" py={'100px'} px={3}>
      <AuthFormHeader
        header_title={header_title}
        header_cta={header_cta}
      />
      <form noValidate>
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Username"
            name={'username'}
            type="text"
          />
          <TextField
            fullWidth
            label="Password"
            name={'password'}
            type="password"
          />
          <Button
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            type={'submit'}
            variant="contained"
          >
            Continue
          </Button>
          <Alert
            color="info"
            severity="info"
            sx={{ mt: 3 }}
          >
            <div>
              If you wanna login as Admin, you can use{' '}
              <b>@admin</b> and password <b>Password123!</b>
            </div>
          </Alert>
          <Alert
            color="info"
            severity="info"
            sx={{ mt: 3 }}
          >
            If you wanna login as User, you can use{' '}
            <b>@user</b> and password <b>Password123!</b>
          </Alert>
        </Stack>
      </form>
    </Box>
  );
};
