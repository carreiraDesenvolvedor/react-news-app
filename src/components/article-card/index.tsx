import React, { FC, ReactElement } from 'react';
import { Schedule } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  SvgIcon,
  Typography,
  Chip,
  Button,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { formatRelative } from 'date-fns';

export interface IArticleCard {
  title: string;
  description: string;
  publishedAt: number;
  source: string;
  url: string;
}
export const ArticleCard: FC<IArticleCard> = ({
  title,
  description,
  publishedAt,
  source,
  url,
}): ReactElement => {
  return (
    <Grid xs={12} md={6} lg={4}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          p: 2,
        }}
      >
        <CardContent>
          <Stack spacing={2}>
            <Typography
              align="center"
              gutterBottom
              variant="h5"
              className="article-title"
            >
              {title}
            </Typography>
            <Typography
              className="article-description"
              align="center"
              variant="body1"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              ></span>
            </Typography>
          </Stack>
        </CardContent>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{ py: 2 }}
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
              className="article-published-date"
            >
              {formatRelative(
                new Date(publishedAt * 1000),
                new Date(),
              )}
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
          >
            <Box alignContent={'end'}>
              <Chip
                label={source}
                className="article-source"
              />
            </Box>
          </Stack>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          sx={{ pb: 2 }}
        >
          <Button
            target="__blank"
            href={url}
            fullWidth
            size="small"
            variant="outlined"
            className="article-link"
          >
            Read Article
          </Button>
        </Stack>
      </Card>
    </Grid>
  );
};
