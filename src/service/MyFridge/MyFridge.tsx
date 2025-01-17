import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUser} from '../../api/user';
import {ListData, UserData} from '../../type/types';
import Apple24 from '../../utils/Svg/Categories/size24/Apple24';
import Bowl24 from '../../utils/Svg/Categories/size24/Bowl24';
import Bread24 from '../../utils/Svg/Categories/size24/Bread24';
import Cheese24 from '../../utils/Svg/Categories/size24/Cheese24';
import ChickenThigh24 from '../../utils/Svg/Categories/size24/ChickenThigh24';
import Egg24 from '../../utils/Svg/Categories/size24/Egg24';
import Fish24 from '../../utils/Svg/Categories/size24/Fish24';
import Grain24 from '../../utils/Svg/Categories/size24/Grain24';
import Instant24 from '../../utils/Svg/Categories/size24/Instant24';
import Kimchi24 from '../../utils/Svg/Categories/size24/Kimchi24';
import Seafood24 from '../../utils/Svg/Categories/size24/Seafood24';
import Soybeans24 from '../../utils/Svg/Categories/size24/Soybeans24';
import Vegetable24 from '../../utils/Svg/Categories/size24/Vegetable24';

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

export const getExpiryDateInfo = (expiryDate: string): string => {
  const date = new Date(expiryDate);
  const today = new Date();
  const timeDifference = today.getTime() - date.getTime();
  const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const minuteDifference = Math.floor(timeDifference / (1000 * 60));
  const hourDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  if (minuteDifference < 1) return '방금';
  if (minuteDifference < 60) return `${minuteDifference}분 전`;
  if (hourDifference < 24) return `${hourDifference}시간 전`;

  if (dayDifference >= 0 && dayDifference <= 6) {
    return `${dayDifference}일 전`;
  }

  const monthDifference = Math.floor(dayDifference / 30);
  if (dayDifference >= 7 && dayDifference < 30)
    return `${Math.floor(dayDifference / 7)}주 전`;
  if (monthDifference === 1) return '1개월 전';
  if (monthDifference > 1) return `${monthDifference}개월 전`;
  return '';
};

export const ingredientCategory = (item: ListData) => {
  switch (item.ingredientCategory) {
    case '채소류':
      return <Vegetable24 />;
    case '육류':
      return <ChickenThigh24 />;
    case '생선류':
      return <Fish24 />;
    case '해산물류':
      return <Seafood24 />;
    case '과일류':
      return <Apple24 />;
    case '곡류':
      return <Grain24 />;
    case '콩류':
      return <Soybeans24 />;
    case '달걀류':
      return <Egg24 />;
    case '유제품':
      return <Cheese24 />;
    case '빵류':
      return <Bread24 />;
    case '가공식품':
      return <Instant24 />;
    case '김치류':
      return <Kimchi24 />;
    default:
      return <Bowl24 />;
  }
};
