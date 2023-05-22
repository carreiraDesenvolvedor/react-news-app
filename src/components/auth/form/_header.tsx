import { Link, Stack, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { Link as LinkReactRouterDom } from 'react-router-dom';
import { EnumAuthRoutesPaths } from '../../../routes/enum/auth-routes-paths';

interface IAuthFormHeaderCTA {
  call: string;
  link_text: string;
  link_to: EnumAuthRoutesPaths;
}

export interface IAuthFormHeader {
  header_title: string;
  header_cta: IAuthFormHeaderCTA;
}

export const AuthFormHeader: FC<IAuthFormHeader> = ({
  header_title,
  header_cta,
}): ReactElement => {
  return (
    <Stack spacing={1} sx={{ mb: 3 }}>
      <Typography variant="h4">{header_title}</Typography>
      <Typography color="text.secondary" variant="body2">
        Don&apos;t have an account?{' '}
        <Link
          component={LinkReactRouterDom}
          underline="hover"
          variant="subtitle2"
          to={header_cta.link_to}
        >
          {header_cta.link_text}
        </Link>
      </Typography>
    </Stack>
  );
};
