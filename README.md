<h1 align="center">
  News Feed App
</h1>

## 🚀 Demo

<p align="left">
    <a href="" target="_blank"><b>Clique here to see a Live Demo</b></a>
</p>

<h4>Watch the GIF below :)</h4>
<p align="center">

![](https://github.com/carreiraDesenvolvedor/react-news-app/blob/main/public/assets/readme/demo-gif.gif)

</p>

## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/carreiraDesenvolvedor/react-news-app
```

2. Change the working directory

```bash
cd react-news-app
```

3. Install dependencies

```bash
npm install
```

4. Setup the .env file

```bash
 cp sample.env .env.local
```

5. Run the application

```bash
npm start
```

🌟 You are all set the App is running over the port 3000!

## 💬️ How the APIs were used

<h4>How are requests to the API being made?</h4>

<p>
    I created the sendApiRequest.ts file with the objective of encapsulating all the requests, making our code more reusable and safe as possible, working with Generics both for the Payload sending and for the response received from the API.
</p>

<h4>The method that must be called to consume an API, receiving two generics: Payload and response(sendApiRequest.ts)</h4>

```
export const sendApiMutationRequest = <
  Payload,
  ResponseSuccessInterface,
>({
  path,
  method,
  onSuccess,
  onError,
}: ISendApiMutationRequest<ResponseSuccessInterface>) => {
  const navigate = useNavigate();
  return useMutation(
    (data: Payload) => {
      return makeRequest(path, method, data);
    },
    {
      onSuccess: async (data: Response) => {
        const response = await data.json();
        if (data.ok) {
          onSuccess({
            data: response.data as ResponseSuccessInterface,
            message: response.message,
          });
        } else {
          if (data.status == 401) {
            navigate(
              `${EnumAuthRoutesPaths.login.replace(
                ':messages',
                response.data.join(','),
              )}}`,
            );
            return;
          }
          onError({
            data: response.data,
            message: response.message,
            status: data.status,
          });
        }
      },
      onError: onError,
    },
  );
};
```

<h4>Example of how this method is being used to request a Login. Below you can see how Generics should be reported, telling Typescript what we expect to send and receive(src/api/auth/login.ts)</h4>

```
export interface IApiAuthLoginUserPayload {
  password: string;
  email: string;
}

export interface IApiAuthLoginUserResponse {
  user: {
    name: string;
    email: string;
    id: number;
    created_at: Date;
  };
  authorization: {
    token: string;
    type: 'bearer';
  };
}

export const apiAuthLoginUser = ({
  onSuccess,
  onError,
}: IApiResponse<IApiAuthLoginUserResponse>) => {
  return sendApiMutationRequest<
    IApiAuthLoginUserPayload,
    IApiAuthLoginUserResponse
  >({
    path: ApiEndpoints.auth.login,
    method: API_METHOD.POST,
    onSuccess,
    onError,
  });
};
```

<h4>Example of how this method is used in our component.</h4>
```
const loginMutation = apiAuthLoginUser({
    onSuccess: ({ data }) => {
      authenticateUser({
        name: data.user.name,
        authorization: data.authorization,
      });
    },
    onError: (error) => {
      ...
    },
  });
```

<h4>To make our code more organized I created the following structure, where we must create a file with the Payload, Response and method of each endpoint that we want to consume.</h4>
<p align="center"><img src="./public/images/readme/structure.png" width="200" alt="Iphone Device" /></p>

## 💻 Built with

- [ReactJS](https://react.dev/)
- [Tanstack](https://tanstack.com/query/v4/docs/react/overview): For Data Fetching
- [React Joyride](https://react-joyride.com/): For the Tour
- [MUI](https://mui.com/): For UI

<hr>
<p align="center">
Developed by Jonathan Melo
</p>
