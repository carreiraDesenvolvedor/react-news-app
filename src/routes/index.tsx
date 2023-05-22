import React, { FC, ReactElement } from 'react';
import { AuthRoutes } from './AuthRoutes';
import { SessionRoutes } from './SessionRoutes';

export const AppRoutes: FC = (): ReactElement => {
  return (
    <>
      <AuthRoutes />
      <SessionRoutes />
    </>
  );
};
