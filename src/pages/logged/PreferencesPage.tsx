import { Box, Container, Stack } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { LoggedLayout } from '../../layouts/logged';
import { PageTopActions } from '../../components/page-top-actions';
import { SectionPreferencesApi } from '../../sections/preferences/preferences-api';

export const PreferencesPage: FC = (): ReactElement => {
  return (
    <LoggedLayout>
      <Box component={'main'} sx={[{ py: 8 }]}>
        <Container maxWidth={'lg'}>
          <Stack spacing={3}>
            <PageTopActions title="Preferences" />
            <SectionPreferencesApi />
          </Stack>
        </Container>
      </Box>
    </LoggedLayout>
  );
};