import { useNavigate } from 'react-router-dom';
import { authCookie } from '../../utils/cookie/authCookie';
import React, {
  createContext,
  FC,
  ReactNode,
  useState,
} from 'react';
import { EnumAuthRoutesPaths } from '../../routes/enum/auth-routes-paths';
import { EnumSessionRoutesPaths } from '../../routes/enum/session-routes-paths';

export interface IAuthContextUser {
  name: string;
  authorization: {
    type: 'bearer';
    token: string;
  };
}

export type IAuthContext = {
  user: IAuthContextUser;
  authenticateUser: (userInfo: IAuthContextUser) => void;
  logout: () => void;
  isUserLogged: () => boolean;
};

export const AuthContext =
  createContext<IAuthContext | null>(null);

type Props = {
  children?: ReactNode;
};

const emptyUser: IAuthContextUser = {
  name: '',
  authorization: {
    token: '',
    type: 'bearer',
  },
};

const AuthProvider: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const authCookieHandler = authCookie();
  const [user, setUser] = useState<IAuthContextUser>(
    authCookieHandler.retrieve(),
  );

  const isUserLogged = (): boolean => {
    return (typeof user.name === 'string' &&
      user.name.length &&
      typeof user.authorization.token === 'string' &&
      user.authorization.token.length) as boolean;
  };

  const authenticateUser = (data: IAuthContextUser) => {
    const user: IAuthContextUser = {
      name: data.name,
      authorization: data.authorization,
    };
    setUser(user);
    authCookieHandler.store(user);
    navigate(EnumSessionRoutesPaths.home);
  };

  const logout = (): void => {
    setUser(emptyUser);
    authCookieHandler.remove();
    navigate(EnumAuthRoutesPaths.login);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticateUser,
        logout,
        isUserLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
