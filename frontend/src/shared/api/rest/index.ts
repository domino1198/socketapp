import { InternalAxiosRequestConfig } from 'axios';
import { AuthController } from './controllers/AuthController';
import { UserController } from './controllers/UserController';
import { ChatsController } from './controllers/ChatsController';

const createAxiosService = <T extends new (...args: any[]) => any>(
  controller: T,
  withToken = true
): InstanceType<T> => {
  const service = new controller({
    baseURL: `${process.env.PUBLIC_URL}/api`,
  });

  withToken &&
    service.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig<any>) => {
        const accessToken = window.localStorage.getItem('accessToken');

        config.headers['Authorization'] = accessToken
          ? `JWT ${accessToken}`
          : '';

        return config;
      }
    );

  return service as InstanceType<T>;
};

export const authService = (withToken = false) =>
  createAxiosService(AuthController, withToken);
export const userService = (withToken = true) =>
  createAxiosService(UserController, withToken);

export const chatsService = createAxiosService(ChatsController, true);
