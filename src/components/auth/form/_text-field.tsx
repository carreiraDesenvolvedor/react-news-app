import { TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';

export interface IAuthFormTextField {
  label: string;
  name: string;
  type: React.InputHTMLAttributes<unknown>['type'];
  disabled?: boolean;
  onChange: (
    event: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement
    >,
  ) => void;
  required?: boolean;
}

export const AuthFormTextField: FC<IAuthFormTextField> = ({
  label,
  name,
  type,
  disabled,
  onChange,
  required,
}): ReactElement => {
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      type={type}
      onChange={onChange}
      disabled={disabled}
      required={required}
    />
  );
};
