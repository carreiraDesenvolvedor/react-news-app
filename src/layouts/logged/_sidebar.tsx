import {
  Box,
  Drawer,
  Stack,
  Theme,
  useMediaQuery,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import {
  ILoggedLayoutSidebarItem,
  LoggedLayoutSidebarItem,
} from './_sidebar-item';
import { SignalCellularAlt } from '@mui/icons-material';
import { EnumSessionRoutesPaths } from '../../routes/enum/session-routes-paths';

const sideNavItems: ILoggedLayoutSidebarItem[] = [
  {
    title: 'Overview',
    path: EnumSessionRoutesPaths.home,
    icon: <SignalCellularAlt />,
  },
];
interface ILoggedLayoutSidebar {
  isSidebarOpen: boolean;
  handleOnCloseSidebar: () => void;
}

export const LoggedLayoutSidebar: FC<
  ILoggedLayoutSidebar
> = ({
  isSidebarOpen,
  handleOnCloseSidebar,
}): ReactElement => {
  const isScreenLarge = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up('lg'),
  );

  return (
    <Drawer
      open={isSidebarOpen}
      onClose={handleOnCloseSidebar}
      anchor="left"
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: 280,
        },
      }}
      variant={isScreenLarge ? 'permanent' : 'temporary'}
    >
      <Box
        component="nav"
        sx={{
          px: 2,
          py: 3,
        }}
      >
        <Stack
          component={'ul'}
          spacing={0.5}
          sx={{
            listStyle: 'none',
            p: 0,
            m: 0,
          }}
        >
          {sideNavItems.length &&
            sideNavItems.map(
              (sidenavItem, sidenavItemKey) => {
                return (
                  <LoggedLayoutSidebarItem
                    key={sidenavItemKey}
                    icon={sidenavItem.icon}
                    title={sidenavItem.title}
                    path={sidenavItem.path}
                  />
                );
              },
            )}
        </Stack>
      </Box>
    </Drawer>
  );
};
