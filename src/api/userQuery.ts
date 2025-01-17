import {useMutation, useQuery} from '@tanstack/react-query';
import {UserData} from '../type/types';
import {
  getUser,
  getUSerToken,
  userBoardCount,
  userLogin,
  UserLoginProps,
} from './user';

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

export const useUserBoardCount = () => {
  return useQuery({
    queryKey: ['userBoardCount'],
    queryFn: userBoardCount,
  });
};
