import { Logout, Menu } from '@mui/icons-material';
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Theme,
  Tooltip,
  alpha,
  useMediaQuery,
} from '@mui/material';
import React, { FC, ReactElement, useContext } from 'react';
import {
  AuthContext,
  IAuthContext,
} from '../../context/auth';

interface ILoggedLayoutTopNav {
  handleShowSidebar: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

export const LoggedLayoutTopNav: FC<
  ILoggedLayoutTopNav
> = ({ handleShowSidebar }): ReactElement => {
  const lgUp = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up('lg'),
  );

  const { user, logout } = useContext(
    AuthContext,
  ) as IAuthContext;

  return (
    <Box
      component={'header'}
      sx={{
        position: 'sticky',
        left: {
          lg: '280px',
        },
        top: 0,
        width: {
          lg: 'calc(100% - 280px)',
        },
        zIndex: (theme) => theme.zIndex.appBar,
        backdropFilter: 'blur(6px)',
        backgroundColor: (theme) =>
          alpha(theme.palette.background.default, 0.8),
      }}
    >
      <Stack
        alignItems={'center'}
        direction={'row'}
        justifyContent={'space-between'}
        spacing={2}
        sx={{
          px: 2,
          minHeight: 64,
        }}
      >
        <Stack>
          {!lgUp && (
            <IconButton onClick={handleShowSidebar}>
              <Menu fontSize="small" />
            </IconButton>
          )}
        </Stack>

        <Stack
          alignItems={'center'}
          direction={'row'}
          spacing={2}
        >
          <Avatar
            sx={{
              cursor: 'pointer',
              height: 40,
              width: 40,
            }}
          >
            {user.name.substring(0, 2)}
          </Avatar>
          <Tooltip title="Logout">
            <IconButton onClick={() => logout()}>
              <Logout />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
};
