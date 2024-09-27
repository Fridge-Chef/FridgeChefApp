import {StyleSheet} from 'react-native';
import React from 'react';
import Back from '../../utils/Svg/Back';
import ArrowDown2 from '../../utils/Svg/ArrowDown2';
import ArrowRight from '../../utils/Svg/ArrowRight';
import BottomButton from '../../utils/Svg/BottomButton';

import Close from '../../utils/Svg/Close';
import Close2 from '../../utils/Svg/Close2';
import Close3 from '../../utils/Svg/Close3';
import Edit from '../../utils/Svg/Edit';
import Edit2 from '../../utils/Svg/Edit2';

import GoogleLogo from '../../utils/Svg/GoogleLogo';
import Heart from '../../utils/Svg/Heart';
import Heart2 from '../../utils/Svg/Heart2';
import Heart3 from '../../utils/Svg/Heart3';
import KakaoLogo from '../../utils/Svg/KakaoLogo';
import LikeIcon from '../../utils/Svg/LikeIcon';
import LoginIcon from '../../utils/Svg/LoginIcon';
import More from '../../utils/Svg/More';
import MoreList from '../../utils/Svg/MoreList';
import Notification from '../../utils/Svg/Notification';
import Plus from '../../utils/Svg/Plus';
import Plus2 from '../../utils/Svg/Plus2';
import Star from '../../utils/Svg/Star';
import Star2 from '../../utils/Svg/Star2';
import TabHeart from '../../utils/Svg/TabHeart';
import UserIcon2 from '../../utils/Svg/UserIcon2';
import Wallet from '../../utils/Svg/Wallet';
import EditSquare from '../../utils/Svg/EditSquare';
import Calendar from '../../utils/Svg/Calendar';
import Send from '../../utils/Svg/Send';
import Heart4 from '../../utils/Svg/Heart4';

type SvgListProps = {
  type:
    | 'back'
    | 'arrowDown2'
    | 'arrowRight'
    | 'bottomButton'
    | 'calendar'
    | 'close'
    | 'close2'
    | 'close3'
    | 'edit'
    | 'edit2'
    | 'editSquare'
    | 'googleLogo'
    | 'heart'
    | 'heart2'
    | 'heart3'
    | 'heart4'
    | 'kakaoLogo'
    | 'likeIcon'
    | 'loginIcon'
    | 'more'
    | 'moreList'
    | 'notification'
    | 'plus'
    | 'plus2'
    | 'send'
    | 'star'
    | 'star2'
    | 'tabHeart'
    | 'userIcon2'
    | 'wallet';
};

const SvgList = ({type}: SvgListProps) => {
  switch (type) {
    case 'arrowDown2':
      return <ArrowDown2 />;
    case 'arrowRight':
      return <ArrowRight />;
    case 'back':
      return <Back />;
    case 'bottomButton':
      return <BottomButton />;
    case 'calendar':
      return <Calendar />;
    case 'close':
      return <Close />;
    case 'close2':
      return <Close2 />;
    case 'close3':
      return <Close3 />;
    case 'edit':
      return <Edit />;
    case 'edit2':
      return <Edit2 />;
    case 'editSquare':
      return <EditSquare />;
    case 'googleLogo':
      return <GoogleLogo />;
    case 'heart':
      return <Heart />;
    case 'heart2':
      return <Heart2 />;
    case 'heart3':
      return <Heart3 />;
    case 'heart4':
      return <Heart4 />;
    case 'kakaoLogo':
      return <KakaoLogo />;
    case 'likeIcon':
      return <LikeIcon />;
    case 'loginIcon':
      return <LoginIcon />;
    case 'more':
      return <More />;
    case 'moreList':
      return <MoreList />;
    case 'notification':
      return <Notification />;
    case 'plus':
      return <Plus />;
    case 'plus2':
      return <Plus2 />;
    case 'send':
      return <Send />;
    case 'star':
      return <Star />;
    case 'star2':
      return <Star2 />;
    case 'tabHeart':
      return <TabHeart />;
    case 'userIcon2':
      return <UserIcon2 />;
    case 'wallet':
      return <Wallet />;
    default:
      return null;
  }
};

export default SvgList;

const styles = StyleSheet.create({});
