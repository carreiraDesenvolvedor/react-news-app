import React, { FC, ReactElement } from 'react';
import {
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
  Divider,
} from '@mui/material';
import { CardForm } from '../../components/card/form';

export const SectionPreferencesApi: FC =
  (): ReactElement => {
    return (
      <CardForm
        onFormSubmit={() => alert('SUBMITED')}
        header={{
          title: 'Api Preferences',
          subheader:
            "Choose the API's you wan't to see articles",
        }}
      >
        <Grid container spacing={3} wrap="wrap">
          <Grid xs={12} sm={12} md={12}>
            <Stack spacing={1}>
              <Typography variant="h6">
                API&apos;s available
              </Typography>
              <Stack flexDirection={'row'}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Email"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Push Notifications"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Text Messages"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Phone calls"
                />
              </Stack>
            </Stack>
          </Grid>
          <Divider />
          <Grid xs={12} sm={12} md={12}>
            <Stack spacing={1}>
              <Typography variant="h6">
                Personalized News Feed
              </Typography>
              <Stack flexDirection={'row'}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Email"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Push Notifications"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Text Messages"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Phone calls"
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </CardForm>
    );
  };
