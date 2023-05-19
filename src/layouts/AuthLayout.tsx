import React, { FC, ReactElement } from 'react';

interface IAuthLayout {
  children: ReactElement[] | ReactElement;
}

export const AuthLayout: FC<IAuthLayout> = ({
  children,
}): ReactElement => {
  return (
    <div style={{ backgroundColor: 'blue' }}>
      {children}
    </div>
  );
};
