import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {FWidth} from '../../../../globalStyle';

const Bread = () => {
  return (
    <Svg
      width={FWidth * 32}
      height={FWidth * 32}
      viewBox="0 0 32 32"
      fill="none">
      <Path
        d="M26.9915 5.00848C22.8611 0.890985 13.7586 3.59713 8.66999 8.67278C3.58139 13.7484 0.901137 22.9157 5.00568 26.9943C5.76088 27.6723 6.64279 28.1941 7.60058 28.5296C8.55838 28.8652 9.57311 29.0079 10.5863 28.9495C15.3875 28.6955 19.9253 26.6757 23.3272 23.2782C28.4029 18.2414 31.109 9.13891 26.9915 5.00848Z"
        fill="#E59A51"
      />
      <Path
        d="M18.588 20.2354C18.4176 20.2364 18.2487 20.2037 18.0909 20.1393C17.9332 20.0749 17.7897 19.9799 17.6687 19.8599C17.2247 19.4278 16.8839 18.9012 16.6717 18.3191C16.5824 18.0582 16.4314 17.8227 16.2314 17.6328C16.0448 17.4319 15.8079 17.2844 15.5452 17.2055C14.9629 16.9876 14.4365 16.6426 14.0044 16.1956C13.5568 15.7788 13.2036 15.2711 12.9685 14.7066C12.8818 14.4482 12.7302 14.2163 12.5283 14.0333C12.4025 13.9125 12.3017 13.7682 12.2316 13.6085C12.1616 13.4488 12.1236 13.2769 12.12 13.1026C12.1128 12.7505 12.2456 12.4099 12.4895 12.1558C12.7333 11.9017 13.068 11.7548 13.4201 11.7475C13.5945 11.7439 13.7678 11.7747 13.9303 11.8381C14.0927 11.9015 14.2411 11.9962 14.3669 12.117C14.8066 12.5525 15.1467 13.0782 15.3639 13.6578C15.4506 13.9162 15.6022 14.148 15.8042 14.3311C15.9857 14.5349 16.218 14.6868 16.4775 14.7713C17.0629 14.9831 17.5905 15.329 18.0183 15.7813C18.4621 16.2059 18.8069 16.7232 19.0282 17.2962C19.1179 17.5531 19.2691 17.7843 19.4685 17.9695C19.5898 18.0899 19.6862 18.2331 19.7519 18.3908C19.8176 18.5486 19.8515 18.7179 19.8515 18.8888C19.8515 19.0597 19.8176 19.229 19.7519 19.3868C19.6862 19.5445 19.5898 19.6877 19.4685 19.8081C19.2422 20.0602 18.9261 20.2136 18.588 20.2354Z"
        fill="#AF7041"
      />
      <Path
        d="M13.9787 24.819C13.8074 24.8183 13.6379 24.7836 13.4801 24.7169C13.3223 24.6503 13.1793 24.5529 13.0594 24.4306C12.6305 23.9961 12.3071 23.469 12.1142 22.8898C12.0296 22.6303 11.8777 22.398 11.6739 22.2165C11.4887 22.0171 11.2576 21.8659 11.0006 21.7762C10.4183 21.5583 9.89196 21.2133 9.45981 20.7663C9.01133 20.3404 8.66592 19.8179 8.44986 19.2384C8.34678 18.9824 8.17685 18.7589 7.95783 18.591C7.74571 18.3433 7.63486 18.0247 7.64745 17.6988C7.66004 17.3729 7.79513 17.0638 8.02573 16.8332C8.25632 16.6026 8.56544 16.4675 8.89132 16.4549C9.21719 16.4424 9.53581 16.5532 9.78351 16.7653C10.2402 17.1792 10.5948 17.6933 10.8194 18.2673C10.8985 18.5261 11.0461 18.7588 11.2466 18.9406C11.4365 19.1406 11.672 19.2916 11.9329 19.3808C12.5125 19.598 13.0381 19.9381 13.4737 20.3778C13.9207 20.81 14.2657 21.3364 14.4837 21.9187C14.5625 22.1814 14.71 22.4183 14.911 22.6049C15.1521 22.8475 15.2875 23.1757 15.2875 23.5178C15.2875 23.8598 15.1521 24.188 14.911 24.4306C14.7895 24.5545 14.6444 24.6527 14.4843 24.7195C14.3241 24.7862 14.1522 24.82 13.9787 24.819Z"
        fill="#AF7041"
      />
      <Path
        d="M23.133 15.6647C22.9617 15.664 22.7922 15.6293 22.6344 15.5626C22.4766 15.4959 22.3336 15.3986 22.2137 15.2763C21.7549 14.8488 21.4005 14.3216 21.1778 13.7354C21.0981 13.4737 20.9454 13.2401 20.7376 13.0621C20.5545 12.8602 20.3227 12.7086 20.0643 12.6219C19.5052 12.3956 19.0016 12.0511 18.5882 11.612C18.1359 11.1842 17.79 10.6565 17.5782 10.0711C17.4991 9.81231 17.3515 9.57967 17.151 9.39784C17.0154 9.28176 16.9053 9.13892 16.8276 8.97828C16.7499 8.81764 16.7062 8.64267 16.6993 8.46435C16.6924 8.28603 16.7225 8.10821 16.7876 7.94206C16.8527 7.7759 16.9514 7.62499 17.0776 7.49881C17.2038 7.37262 17.3547 7.27388 17.5209 7.20879C17.687 7.14369 17.8648 7.11365 18.0432 7.12053C18.2215 7.12742 18.3964 7.17109 18.5571 7.24881C18.7177 7.32653 18.8606 7.43662 18.9766 7.57216C19.4251 7.99801 19.7705 8.52056 19.9866 9.10003C20.0654 9.36273 20.2129 9.59964 20.4139 9.78628C20.6038 9.98624 20.8392 10.1373 21.1001 10.2265C21.6822 10.4387 22.2089 10.7795 22.6409 11.2235C23.0879 11.6557 23.433 12.182 23.6509 12.7643C23.7297 13.027 23.8772 13.2639 24.0782 13.4506C24.3193 13.6932 24.4547 14.0214 24.4547 14.3634C24.4547 14.7055 24.3193 15.0337 24.0782 15.2763C23.9552 15.4018 23.808 15.5009 23.6455 15.5677C23.483 15.6345 23.3086 15.6675 23.133 15.6647Z"
        fill="#AF7041"
      />
    </Svg>
  );
};

export default Bread;

const styles = StyleSheet.create({});
