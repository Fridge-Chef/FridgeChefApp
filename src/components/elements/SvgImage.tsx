import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Wallet from '../../assets/images/svg/Wallet.svg';
import Heart from '../../assets/images/svg/Heart.svg';
import EditSquare from '../../assets/images/svg/EditSquare.svg';
import MoreCircle from '../../assets/images/svg/MoreCircle.svg';
import Plus from '../../assets/images/svg/Plus.svg';
type SvgImageProps = {
  type: string;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
};

const SvgImage = ({type, width, height, fill, stroke}: SvgImageProps) => {
  switch (type) {
    case 'wallet':
      return (
        <Wallet width={width} height={height} fill={fill} stroke={stroke} />
      );
    case 'heart':
      return (
        <Heart width={width} height={height} fill={fill} stroke={stroke} />
      );
    case 'editSquare':
      return (
        <EditSquare width={width} height={height} fill={fill} stroke={stroke} />
      );
    case 'moreCircle':
      return (
        <MoreCircle width={width} height={height} fill={fill} stroke={stroke} />
      );
    case 'plus':
      return <Plus width={width} height={height} fill={fill} stroke={stroke} />;
    default:
      break;
  }
};

export default SvgImage;

const styles = StyleSheet.create({});
