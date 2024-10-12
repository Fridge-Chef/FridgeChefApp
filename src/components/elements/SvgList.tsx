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
import StarReview1 from '../../utils/Svg/StarReview1';
import StarReview2 from '../../utils/Svg/StarReview2';
import ImageIcon from '../../utils/Svg/ImageIcon';
import DetailHeart from '../../utils/Svg/DetailHeart';
import DetailShare from '../../utils/Svg/DetailShare';
import DetailBack from '../../utils/Svg/DetailBack';
import HeaderCLose from '../../utils/Svg/HeaderCLose';
import DetailReviewEdit from '../../utils/Svg/DetailReviewEdit';
import DetailReviewMore from '../../utils/Svg/DetailReviewMore';

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
    | 'detailBack'
    | 'detailHeart'
    | 'detailReviewMore'
    | 'detailShare'
    | 'headerClose'
    | 'heart'
    | 'heart2'
    | 'heart3'
    | 'heart4'
    | 'imageIcon'
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
    | 'starReview1'
    | 'starReview2'
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
    case 'detailBack':
      return <DetailBack />;
    case 'detailHeart':
      return <DetailHeart />;
    case 'detailReviewMore':
      return <DetailReviewMore />;
    case 'detailShare':
      return <DetailShare />;
    case 'edit':
      return <Edit />;
    case 'editSquare':
      return <EditSquare />;
    case 'googleLogo':
      return <GoogleLogo />;
    case 'headerClose':
      return <HeaderCLose />;
    case 'heart':
      return <Heart />;
    case 'heart2':
      return <Heart2 />;
    case 'heart3':
      return <Heart3 />;
    case 'heart4':
      return <Heart4 />;
    case 'imageIcon':
      return <ImageIcon />;
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
    case 'starReview1':
      return <StarReview1 />;
    case 'starReview2':
      return <StarReview2 />;
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
