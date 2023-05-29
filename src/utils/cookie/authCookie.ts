import Cookies from 'js-cookie';
import { IAuthContextUser } from '../../context/auth';

export const authCookie = () => {
  const retrieve = (): IAuthContextUser => {
    return {
      name: Cookies.get('user-name') as string,
      authorization: {
        type: Cookies.get('token-type') as 'bearer',
        token: Cookies.get('token') as string,
      },
    };
  };
  const store = (user: IAuthContextUser): void => {
    Cookies.set('token', user.authorization.token, {
      path: '/',
    });
    Cookies.set('token-type', user.authorization.type, {
      path: '/',
    });
    Cookies.set('user-name', user.name, {
      path: '/',
    });
  };

  const remove = () => {
    Cookies.remove('token');
    Cookies.remove('token-type');
    Cookies.remove('user-name');
  };

  return {
    retrieve,
    store,
    remove,
  };
};
