import React, { FC, ReactElement, ReactNode } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
} from '@mui/material';

export interface ICardFormOnSubmit {
  onFormSubmit: (
    event: React.FormEvent<HTMLFormElement>,
  ) => void;
}

export interface ICardForm extends ICardFormOnSubmit {
  header?: {
    title: string;
    subheader?: string;
  };
  children: ReactNode | ReactNode[];
  submitButtonText?: string;
  className?: string;
}

export const CardForm: FC<ICardForm> = ({
  header,
  children,
  onFormSubmit,
  submitButtonText,
  className,
}): ReactElement => {
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => onFormSubmit(event);

  return (
    <form className={className} onSubmit={handleSubmit}>
      <Card sx={{ py: 2 }}>
        {header?.title ||
          (header?.subheader && (
            <>
              <CardHeader
                subheader={header.subheader}
                title={header.title}
              />
              <Divider />
            </>
          ))}
        <CardContent>{children}</CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button
            className="my-third-step"
            type="submit"
            variant="contained"
          >
            {submitButtonText ? submitButtonText : 'Save'}
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
