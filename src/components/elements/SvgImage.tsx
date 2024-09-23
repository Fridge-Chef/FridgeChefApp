import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Wallet from '../../assets/images/svg/Wallet.svg';
import Heart from '../../assets/images/svg/Heart.svg';
import EditSquare from '../../assets/images/svg/EditSquare.svg';
import MoreCircle from '../../assets/images/svg/MoreCircle.svg';
import Plus from '../../assets/images/svg/Plus.svg';
import ArrowDown from '../../assets/images/svg/ArrowDown.svg';
import SmallPlus from '../../assets/images/svg/SmallPlus.svg';
import Calendar from '../../assets/images/svg/Calendar.svg';
import Close from '../../assets/images/svg/Close.svg';
import Close2 from '../../assets/images/svg/Close2.svg';
import Back from '../../assets/images/svg/Back.svg';
type SvgImageProps = {
  type:
    | 'wallet'
    | 'heart'
    | 'editSquare'
    | 'moreCircle'
    | 'plus'
    | 'arrowDown'
    | 'smallPlus'
    | 'calendar'
    | 'close'
    | 'close2'
    | 'back';
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  rotation?: number;
};

const SvgImage = ({
  type,
  width,
  height,
  fill,
  stroke,
  rotation,
}: SvgImageProps) => {
  switch (type) {
    case 'wallet':
      return (
        <Wallet
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          rotation={rotation}
        />
      );
    case 'heart':
      return (
        <Heart
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          rotation={rotation}
        />
      );
    case 'editSquare':
      return (
        <EditSquare
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          rotation={rotation}
        />
      );
    case 'moreCircle':
      return (
        <MoreCircle
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          rotation={rotation}
        />
      );
    case 'plus':
      return (
        <Plus
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          rotation={rotation}
        />
      );
    case 'arrowDown':
      return (
        <ArrowDown
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          rotation={rotation}
        />
      );
    case 'smallPlus':
      return (
        <SmallPlus
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          rotation={rotation}
        />
      );
    case 'calendar':
      return (
        <Calendar
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          rotation={rotation}
        />
      );
    case 'close':
      return (
        <Close
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          rotation={rotation}
        />
      );
    case 'close2':
      return (
        <Close2
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          rotation={rotation}
        />
      );
    case 'back':
      return (
        <Back
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          rotation={rotation}
        />
      );
    default:
      break;
  }
};

export default SvgImage;

const styles = StyleSheet.create({});
