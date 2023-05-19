import React, { FC, ReactElement } from 'react';
import { AuthRoutes } from './AuthRoutes';

export const AppRoutes: FC = (): ReactElement => {
  return (
    <>
      <AuthRoutes />
    </>
  );
};
