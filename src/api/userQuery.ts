import {useMutation, useQuery} from '@tanstack/react-query';
import {getUser, getUSerToken, userLogin, UserLoginProps} from './user';
import {UserData} from '../type/types';

export const useGetUser = () => {
  return useQuery<UserData>({
    queryKey: ['user'],
    queryFn: getUser,
  });
};

export const useGetRefreshUser = () => {
  return useQuery({
    queryKey: ['refreshUser'],
    queryFn: getUSerToken,
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
