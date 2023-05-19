type API_METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE';

const buildInitRequestParm = (
  method: API_METHOD,
  data: unknown,
): RequestInit => {
  if (method == 'GET') {
    return {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  return {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export const sendApiRequest = async <T>(
  url: string,
  method: API_METHOD,
  data: unknown = {},
): Promise<T> => {
  const response = await fetch(
    url,
    buildInitRequestParm(method, data),
  );

  if (!response.ok) {
    const message = `An error has ocurred: ${response.status}`;
    throw new Error(message);
  }

  return (await response.json()) as Promise<T>;
};
