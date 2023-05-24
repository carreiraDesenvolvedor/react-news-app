import { Search } from '@mui/icons-material';
import React, {
  Card,
  InputAdornment,
  OutlinedInput,
  SvgIcon,
} from '@mui/material';
import { FC, ReactElement } from 'react';

export const SectionHomeSearch: FC = (): ReactElement => (
  <Card sx={{ p: 2 }}>
    <OutlinedInput
      multiline={true}
      defaultValue=""
      fullWidth
      placeholder="Search by keywords"
      startAdornment={
        <InputAdornment position="start">
          <SvgIcon color="action" fontSize="small">
            <Search />
          </SvgIcon>
        </InputAdornment>
      }
    />
  </Card>
);
