import React, { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteGuard } from '../utils/RouteGuard';

export enum EnumSessionRoutesPaths {
  home = '/home',
}

export const SessionRoutes: FC = (): ReactElement => {
  return (
    <Routes>
      <Route element={<RouteGuard />}>
        <Route
          path={EnumSessionRoutesPaths.home}
          element={
            <>
              <h1>HOME BRO</h1>
            </>
          }
        />
      </Route>
    </Routes>
  );
};
