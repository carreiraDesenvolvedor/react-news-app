import { Add } from '@mui/icons-material';
import {
  Button,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';

import { Link as ReactRouterDomLink } from 'react-router-dom';
import { EnumSessionRoutesPaths } from '../../routes/enum/session-routes-paths';

interface IPageTopActionsButton {
  text: string;
  to: EnumSessionRoutesPaths;
}

interface IPageTopActions {
  title?: string;
  button?: IPageTopActionsButton;
}

export const PageTopActions: FC<IPageTopActions> = ({
  title,
  button,
}): ReactElement => {
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
    >
      <Stack>
        {title && (
          <Typography variant="h4">{title}</Typography>
        )}
      </Stack>
      <Stack>
        {button && (
          <Link
            sx={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            component={ReactRouterDomLink}
            to={button.to}
          >
            <Button startIcon={<Add />} variant="contained">
              {button.text}
            </Button>
          </Link>
        )}
      </Stack>
    </Stack>
  );
};
