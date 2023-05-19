import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { AuthFormHeader, IAuthFormHeader } from './_header';

interface IAuthForm extends IAuthFormHeader {
  //TODO - Should be removed in future
  temp?: boolean;
}

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
        </Stack>
      </form>
    </Box>
  );
};
