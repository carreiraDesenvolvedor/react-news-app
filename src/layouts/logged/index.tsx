import { Box, Theme, useMediaQuery } from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import { LoggedLayoutSidebar } from './_sidebar';
import { LoggedLayoutTopNav } from './_top-nav';

export interface ILoggedLayout {
  children: ReactElement[] | ReactElement;
}

export const LoggedLayout: FC<ILoggedLayout> = ({
  children,
}): ReactElement => {
  const [isSidebarOpened, setIsSidebarOpened] =
    useState(false);

  const isScreenLarge = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up('lg'),
  );
  return (
    <>
      <LoggedLayoutSidebar
        isSidebarOpen={isSidebarOpened}
        handleOnCloseSidebar={() => {
          setIsSidebarOpened(false);
        }}
      />
      <LoggedLayoutTopNav
        handleShowSidebar={() => setIsSidebarOpened(true)}
      />
      <Box
        minHeight={'100vh'}
        component={'main'}
        display={'flex'}
        flexDirection={'row'}
        flex={'1 1 auto'}
        paddingLeft={isScreenLarge ? '280px' : 0}
      >
        <Box
          sx={{
            width: '100%',
          }}
        >
          <span>{children}</span>
        </Box>
      </Box>
    </>
  );
};
