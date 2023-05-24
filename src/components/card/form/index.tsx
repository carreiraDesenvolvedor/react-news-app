import React, { FC, ReactNode, useCallback } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
} from '@mui/material';

interface ICardForm {
  header: {
    title: string;
    subheader?: string;
  };
  children: ReactNode | ReactNode[];
  onFormSubmit: (
    event: React.FormEvent<HTMLFormElement>,
  ) => void;
}

export const CardForm: FC<ICardForm> = ({
  header,
  children,
  onFormSubmit,
}) => {
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onFormSubmit(event);
    },
    [],
  );

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          subheader={header.subheader}
          title={header.title}
        />
        <Divider />
        <CardContent>{children}</CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
