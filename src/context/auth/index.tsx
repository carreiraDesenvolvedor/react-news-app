import { authCookie } from '../../utils/cookie/authCookie';
import React, {
  createContext,
  FC,
  ReactNode,
  useState,
} from 'react';

export interface IAuthContextUser {
  name: string;
  authorization: {
    type: 'bearer';
    token: string;
  };
}

export type IAuthContext = {
  user: IAuthContextUser;
  getUserInfo: () => IAuthContextUser;
  authenticateUser: (userInfo: IAuthContextUser) => void;
};

export const AuthContext =
  createContext<IAuthContext | null>(null);

type Props = {
  children?: ReactNode;
};

const AuthProvider: FC<Props> = ({ children }) => {
  const authCookieHandler = authCookie();
  const [user, setUser] = useState<IAuthContextUser>(
    authCookieHandler.retrieve(),
  );

  const getUserInfo = () => {
    return user;
  };

  const authenticateUser = (data: IAuthContextUser) => {
    const user: IAuthContextUser = {
      name: data.name,
      authorization: data.authorization,
    };
    setUser(user);
    authCookieHandler.store(user);
  };

  return (
    <AuthContext.Provider
      value={{ user, getUserInfo, authenticateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
