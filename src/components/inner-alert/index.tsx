import React, { Alert, AlertColor } from '@mui/material';
import { FC, ReactElement } from 'react';

export interface IInnerAlert {
  color: AlertColor;
  severity: AlertColor;
  message: ReactElement;
}

export const InnerAlert: FC<IInnerAlert> = ({
  color,
  severity,
  message,
}): ReactElement => {
  return (
    <Alert color={color} severity={severity} sx={{ mt: 3 }}>
      {message}
    </Alert>
  );
};
