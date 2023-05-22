import { useCookies } from 'react-cookie';
import { IAuthContextUser } from '../../context/auth';

export const authCookie = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    'token',
    'token-type',
    'user-name',
  ]);

  const retrieve = (): IAuthContextUser => {
    return {
      name: cookies['user-name'] as string,
      authorization: {
        type: cookies['token-type'],
        token: cookies['token'] as string,
      },
    };
  };
  const store = (user: IAuthContextUser): void => {
    setCookie('token', user.authorization.token, {
      path: '/',
    });
    setCookie('token-type', user.authorization.type, {
      path: '/',
    });
    setCookie('user-name', user.name, {
      path: '/',
    });
  };

  const remove = () => {
    removeCookie('token');
    removeCookie('token-type');
    removeCookie('user-name');
  };

  return {
    retrieve,
    store,
    remove,
  };
};
