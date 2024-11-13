import {StyleSheet} from 'react-native';
import React from 'react';
import Back from '../../utils/Svg/Back';
import ArrowRight from '../../utils/Svg/ArrowRight';
import Close2 from '../../utils/Svg/Close2';
import Close3 from '../../utils/Svg/Close3';
import GoogleLogo from '../../utils/Svg/GoogleLogo';
import Heart from '../../utils/Svg/Heart';
import KakaoLogo from '../../utils/Svg/KakaoLogo';
import More from '../../utils/Svg/More';
import Notification from '../../utils/Svg/Notification';
import Plus from '../../utils/Svg/Plus';
import Star2 from '../../utils/Svg/Star2';
import TabHeart from '../../utils/Svg/TabHeart';
import Wallet from '../../utils/Svg/Wallet';
import EditSquare from '../../utils/Svg/EditSquare';
import StarReview1 from '../../utils/Svg/StarReview1';
import StarReview2 from '../../utils/Svg/StarReview2';
import ImageIcon from '../../utils/Svg/ImageIcon';
import DetailHeart from '../../utils/Svg/DetailHeart';
import DetailShare from '../../utils/Svg/DetailShare';
import DetailBack from '../../utils/Svg/DetailBack';
import HeaderCLose from '../../utils/Svg/HeaderCLose';
import DetailReviewMore from '../../utils/Svg/DetailReviewMore';

type SvgListProps = {
  type:
    | 'back'
    | 'arrowRight'
    | 'close2'
    | 'close3'
    | 'edit2'
    | 'editSquare'
    | 'googleLogo'
    | 'detailBack'
    | 'detailHeart'
    | 'detailReviewMore'
    | 'detailShare'
    | 'headerClose'
    | 'heart'
    | 'imageIcon'
    | 'kakaoLogo'
    | 'more'
    | 'notification'
    | 'plus'
    | 'star2'
    | 'starReview1'
    | 'starReview2'
    | 'tabHeart'
    | 'wallet';
};

const SvgList = ({type}: SvgListProps) => {
  switch (type) {
    case 'arrowRight':
      return <ArrowRight />;
    case 'back':
      return <Back />;
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
    case 'editSquare':
      return <EditSquare />;
    case 'googleLogo':
      return <GoogleLogo />;
    case 'headerClose':
      return <HeaderCLose />;
    case 'heart':
      return <Heart />;
    case 'imageIcon':
      return <ImageIcon />;
    case 'kakaoLogo':
      return <KakaoLogo />;
    case 'more':
      return <More />;
    case 'notification':
      return <Notification />;
    case 'plus':
      return <Plus />;
    case 'star2':
      return <Star2 />;
    case 'starReview1':
      return <StarReview1 />;
    case 'starReview2':
      return <StarReview2 />;
    case 'tabHeart':
      return <TabHeart />;
    case 'wallet':
      return <Wallet />;
    default:
      return null;
  }
};

export default SvgList;

const styles = StyleSheet.create({});
