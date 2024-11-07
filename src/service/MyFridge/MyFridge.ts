import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUser} from '../../api/user';
import {ListData, UserData} from '../../type/types';

type TokenProps = {
  setUser: (user: UserData) => void;
};

type DateType = {
  item: ListData;
  today: Date;
};

export const getUserData = async ({setUser}: TokenProps) => {
  try {
    const user = await getUser();
    if (user) {
      return setUser(user);
    }
    console.log(user);
  } catch (error: any) {
    console.log('유저 가져오기', error);
  }
};

export const getToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};

export let date = ({item, today}: DateType) => {
  if (!item.expirationDate) return;
  const expiryDate = new Date(item.expirationDate);
  const timeDifference = expiryDate.getTime() - today.getTime();
  const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  switch (dayDifference + 1) {
    case 3:
      return 'D-3';
    case 2:
      return 'D-2';
    case 1:
      return 'D-1';
    case 0:
      return '오늘 이후 폐기';
    default:
      return '';
  }
};
