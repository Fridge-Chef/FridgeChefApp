import {useMutation, useQuery} from '@tanstack/react-query';
import {getUser, getUSerToken, userLogin, UserLoginProps} from './user';
import {UserData} from '../type/types';

export const useGetUser = () => {
  const queryFn = () => getUser();
  return useQuery<UserData>({
    queryKey: ['user'],
    queryFn,
  });
};

export const useGetRefreshUser = () => {
  const queryFn = () => getUSerToken();
  return useQuery({
    queryKey: ['refreshUser'],
    queryFn,
  });
};

export const useLogin = () => {
  const mutationFn = ({token, registration}: UserLoginProps) =>
    userLogin({token, registration: registration});
  return useMutation({
    mutationKey: ['login'],
    mutationFn,
  });
};
