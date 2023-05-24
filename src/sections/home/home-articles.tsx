// import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
// import ClockIcon from '@heroicons/react/24/solid/ClockIcon';
import {
  Schedule,
  ScheduleOutlined,
  ScheduleRounded,
} from '@mui/icons-material';
import React, {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { FC, ReactElement } from 'react';

interface ISectionHomeArticles {
  articles: {
    logo: string;
    views: string;
    description: string;
    title: string;
    createdAt: string;
  }[];
}

export const SectionHomeArticles: FC<
  ISectionHomeArticles
> = ({ articles }): ReactElement => {
  return (
    <Grid container spacing={3}>
      {articles.map((article, index) => (
        <Grid xs={12} md={6} lg={4} key={index}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pb: 3,
                }}
              >
                <Avatar
                  src={article.logo}
                  variant="square"
                />
              </Box>
              <Typography
                align="center"
                gutterBottom
                variant="h5"
              >
                {article.title}
              </Typography>
              <Typography align="center" variant="body1">
                {article.description}
              </Typography>
            </CardContent>
            <Box sx={{ flexGrow: 1 }} />
            <Divider />
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
              spacing={2}
              sx={{ p: 2 }}
            >
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
                <SvgIcon color="action" fontSize="small">
                  <Schedule />
                </SvgIcon>
                <Typography
                  color="text.secondary"
                  display="inline"
                  variant="body2"
                >
                  Updated 2hr ago
                </Typography>
              </Stack>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
                <Typography
                  color="text.secondary"
                  display="inline"
                  variant="body2"
                >
                  {article.views} Views
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
