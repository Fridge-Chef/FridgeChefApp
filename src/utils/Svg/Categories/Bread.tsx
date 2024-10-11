import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {FWidth} from '../../../../globalStyle';

const Bread = () => {
  return (
    <Svg
      width={FWidth * 32}
      height={FWidth * 32}
      viewBox="0 0 32 32"
      fill="none">
      <G style="mix-blend-mode:luminosity" opacity="0.6">
        <Path
          d="M26.9915 5.00848C22.8611 0.890985 13.7586 3.59713 8.66999 8.67278C3.58139 13.7484 0.901137 22.9157 5.00568 26.9943C5.76088 27.6723 6.64279 28.1941 7.60058 28.5296C8.55838 28.8652 9.57311 29.0079 10.5863 28.9495C15.3875 28.6955 19.9253 26.6757 23.3272 23.2782C28.4029 18.2414 31.109 9.13891 26.9915 5.00848Z"
          fill="#E59A51"
        />
        <Path
          d="M18.588 20.2352C18.4176 20.2362 18.2487 20.2035 18.0909 20.1391C17.9332 20.0747 17.7897 19.9797 17.6687 19.8597C17.2247 19.4277 16.8839 18.901 16.6717 18.3189C16.5824 18.058 16.4314 17.8225 16.2314 17.6327C16.0448 17.4317 15.8079 17.2842 15.5452 17.2054C14.9629 16.9874 14.4365 16.6424 14.0044 16.1954C13.5568 15.7787 13.2036 15.2709 12.9685 14.7064C12.8818 14.448 12.7302 14.2161 12.5283 14.0331C12.4025 13.9124 12.3017 13.768 12.2316 13.6083C12.1616 13.4487 12.1236 13.2767 12.12 13.1024C12.1128 12.7503 12.2456 12.4097 12.4895 12.1556C12.7333 11.9015 13.068 11.7546 13.4201 11.7474C13.5945 11.7437 13.7678 11.7745 13.9303 11.8379C14.0927 11.9013 14.2411 11.996 14.3669 12.1168C14.8066 12.5524 15.1467 13.078 15.3639 13.6576C15.4506 13.916 15.6022 14.1478 15.8042 14.3309C15.9857 14.5347 16.218 14.6866 16.4775 14.7711C17.0629 14.9829 17.5905 15.3288 18.0183 15.7811C18.4621 16.2058 18.8069 16.723 19.0282 17.296C19.1179 17.5529 19.2691 17.7841 19.4685 17.9693C19.5898 18.0897 19.6862 18.2329 19.7519 18.3907C19.8176 18.5484 19.8515 18.7177 19.8515 18.8886C19.8515 19.0595 19.8176 19.2288 19.7519 19.3866C19.6862 19.5444 19.5898 19.6876 19.4685 19.8079C19.2422 20.0601 18.9261 20.2135 18.588 20.2352Z"
          fill="#AF7041"
        />
        <Path
          d="M13.9787 24.8192C13.8074 24.8184 13.6379 24.7837 13.4801 24.7171C13.3223 24.6504 13.1793 24.5531 13.0594 24.4307C12.6305 23.9962 12.3071 23.4691 12.1142 22.8899C12.0296 22.6304 11.8777 22.3981 11.6739 22.2166C11.4887 22.0172 11.2576 21.8661 11.0006 21.7764C10.4183 21.5584 9.89196 21.2134 9.45981 20.7664C9.01133 20.3406 8.66592 19.818 8.44986 19.2385C8.34678 18.9826 8.17685 18.759 7.95783 18.5911C7.74571 18.3434 7.63486 18.0248 7.64745 17.6989C7.66004 17.3731 7.79513 17.0639 8.02573 16.8333C8.25632 16.6027 8.56544 16.4677 8.89132 16.4551C9.21719 16.4425 9.53581 16.5533 9.78351 16.7654C10.2402 17.1793 10.5948 17.6934 10.8194 18.2674C10.8985 18.5263 11.0461 18.7589 11.2466 18.9407C11.4365 19.1407 11.672 19.2917 11.9329 19.381C12.5125 19.5981 13.0381 19.9383 13.4737 20.378C13.9207 20.8101 14.2657 21.3365 14.4837 21.9188C14.5625 22.1815 14.71 22.4184 14.911 22.605C15.1521 22.8476 15.2875 23.1758 15.2875 23.5179C15.2875 23.8599 15.1521 24.1881 14.911 24.4307C14.7895 24.5546 14.6444 24.6528 14.4843 24.7196C14.3241 24.7863 14.1522 24.8202 13.9787 24.8192Z"
          fill="#AF7041"
        />
        <Path
          d="M23.133 15.6648C22.9617 15.6641 22.7922 15.6294 22.6344 15.5627C22.4766 15.496 22.3336 15.3987 22.2137 15.2763C21.7549 14.8489 21.4005 14.3217 21.1778 13.7355C21.0981 13.4737 20.9454 13.2402 20.7376 13.0622C20.5545 12.8603 20.3227 12.7087 20.0643 12.622C19.5052 12.3957 19.0016 12.0512 18.5882 11.612C18.1359 11.1843 17.79 10.6566 17.5782 10.0712C17.4991 9.81237 17.3515 9.57973 17.151 9.3979C17.0154 9.28182 16.9053 9.13898 16.8276 8.97834C16.7499 8.8177 16.7062 8.64273 16.6993 8.46441C16.6924 8.28609 16.7225 8.10827 16.7876 7.94212C16.8527 7.77596 16.9514 7.62505 17.0776 7.49887C17.2038 7.37268 17.3547 7.27394 17.5209 7.20885C17.687 7.14375 17.8648 7.11371 18.0432 7.12059C18.2215 7.12748 18.3964 7.17115 18.5571 7.24887C18.7177 7.32659 18.8606 7.43668 18.9766 7.57222C19.4251 7.99807 19.7705 8.52062 19.9866 9.10009C20.0654 9.3628 20.2129 9.5997 20.4139 9.78634C20.6038 9.9863 20.8392 10.1373 21.1001 10.2266C21.6822 10.4388 22.2089 10.7796 22.6409 11.2236C23.0879 11.6557 23.433 12.1821 23.6509 12.7644C23.7297 13.0271 23.8772 13.264 24.0782 13.4506C24.3193 13.6932 24.4547 14.0214 24.4547 14.3635C24.4547 14.7056 24.3193 15.0337 24.0782 15.2763C23.9552 15.4018 23.808 15.501 23.6455 15.5677C23.483 15.6345 23.3086 15.6675 23.133 15.6648Z"
          fill="#AF7041"
        />
      </G>
    </Svg>
  );
};

export default Bread;

const styles = StyleSheet.create({});
