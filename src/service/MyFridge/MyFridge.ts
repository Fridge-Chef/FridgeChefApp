import {baseUrl} from '../../api/axios';
import {getUser} from '../../api/user';
import {UserData} from '../../type/types';

type TokenProps = {
  setUser: (user: UserData) => void;
};

export const getUserData = async ({setUser}: TokenProps) => {
  try {
    const user = await getUser();
    return setUser(user);
  } catch (error) {
    console.log('유저 가져오기', error);
  }
};
