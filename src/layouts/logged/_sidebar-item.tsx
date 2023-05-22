import { Box, ButtonBase, SvgIcon } from '@mui/material';
import React, { FC, ReactElement, ReactNode } from 'react';
import { Link as LinkReactRouterDom } from 'react-router-dom';
import { EnumSessionRoutesPaths } from '../../routes/enum/session-routes-paths';

export interface ILoggedLayoutSidebarItem {
  active?: boolean;
  icon: ReactNode;
  path: EnumSessionRoutesPaths;
  title: string;
}

export const LoggedLayoutSidebarItem: FC<
  ILoggedLayoutSidebarItem
> = ({
  active = false,
  icon,
  title,
  path,
}): ReactElement => {
  return (
    <li>
      <ButtonBase
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          display: 'flex',
          justifyContent: 'center',
          pl: '16px',
          pr: '16px',
          py: '6px',
          textAlign: 'left',
          width: '100%',
          backgroundColor: active
            ? 'rgba(255, 255, 255, 0.04)'
            : 'inherit',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
          },
        }}
        component={LinkReactRouterDom}
        to={path}
      >
        <Box
          component={'span'}
          sx={{
            alignItems: 'center',
            display: 'inline-flex',
            justifyContent: 'center',
            mr: 2,
            color: active ? 'primary.main' : 'neutral.400',
          }}
        >
          <SvgIcon fontSize="small">{icon}</SvgIcon>
        </Box>
        <Box
          component={'span'}
          sx={{
            fontFamily: (theme) =>
              theme.typography.fontFamily,
            color: active ? 'common.white' : 'neutral.400',
            flexGrow: 1,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Box>
      </ButtonBase>
    </li>
  );
};
