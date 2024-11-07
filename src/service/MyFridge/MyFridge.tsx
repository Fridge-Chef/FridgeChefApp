import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUser} from '../../api/user';
import {ListData, UserData} from '../../type/types';
import Vegetable from '../../utils/Svg/Categories/Vegetable';
import ChickenThigh from '../../utils/Svg/Categories/ChickenThigh';
import Fish from '../../utils/Svg/Categories/Fish';
import Seafood from '../../utils/Svg/Categories/Seafood';
import AppleIcon from '../../utils/Svg/Categories/AppleIcon';
import Grain from '../../utils/Svg/Categories/Grain';
import Soybeans from '../../utils/Svg/Categories/Soybeans';
import Egg from '../../utils/Svg/Categories/Egg';
import Cheese from '../../utils/Svg/Categories/Cheese';
import Bread from '../../utils/Svg/Categories/Bread';
import Instant from '../../utils/Svg/Categories/Instant';
import Kimchi from '../../utils/Svg/Categories/Kimchi';
import Bowl from '../../utils/Svg/Categories/Bowl';

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

export const ingredientCategory = (item: ListData) => {
  switch (item.ingredientCategory) {
    case '채로류':
      return <Vegetable />;
    case '육류':
      return <ChickenThigh />;
    case '생선류':
      return <Fish />;
    case '해산물류':
      return <Seafood />;
    case '과일류':
      return <AppleIcon />;
    case '곡류':
      return <Grain />;
    case '콩류':
      return <Soybeans />;
    case '달걀류':
      return <Egg />;
    case '유제품':
      return <Cheese />;
    case '빵류':
      return <Bread />;
    case '가공식품':
      return <Instant />;
    case '김치류':
      return <Kimchi />;
    default:
      return <Bowl />;
  }
};
