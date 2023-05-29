import React, { useContext } from 'react';
import {
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { AuthContext, IAuthContext } from '../context/auth';
import { EnumAuthRoutesPaths } from '../routes/enum/auth-routes-paths';
import { EnumSessionRoutesPaths } from '../routes/enum/session-routes-paths';

const NON_PROTECTED_ROUTES: string[] = [
  EnumAuthRoutesPaths.login,
  EnumAuthRoutesPaths.register,
];

const isProtectedRoute = (): boolean => {
  const { pathname } = useLocation();
  return !NON_PROTECTED_ROUTES.includes(pathname);
};

export const RouteGuard = () => {
  const { isUserLogged, logout } = useContext(
    AuthContext,
  ) as IAuthContext;
  if (isProtectedRoute() && !isUserLogged()) {
    logout();
    return null;
  }

  return !isProtectedRoute() && isUserLogged() ? (
    <Navigate to={EnumSessionRoutesPaths.home} />
  ) : (
    <Outlet />
  );
};
