import axios from 'axios';
import Config from 'react-native-config';
export const baseUrl = axios.create({
  baseURL: Config.BASE_URL,
});
