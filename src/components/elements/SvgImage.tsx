import {StyleSheet} from 'react-native';
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
import ArrowDown2 from '../../assets/images/svg/ArrowDown2.svg';
import Star from '../../assets/images/svg/Star.svg';
import Heart2 from '../../assets/images/svg/Heart2.svg';
import Heart3 from '../../assets/images/svg/Heart3.svg';
import Heart4 from '../../assets/images/svg/Heart4.svg';
import ArrowLeft3 from '../../assets/images/svg/ArrowLeft3.svg';
type SvgImageProps = {
  type:
    | 'wallet'
    | 'heart'
    | 'heart2'
    | 'heart3'
    | 'heart4'
    | 'editSquare'
    | 'moreCircle'
    | 'plus'
    | 'arrowDown'
    | 'arrowDown2'
    | 'arrowLeft3'
    | 'smallPlus'
    | 'calendar'
    | 'close'
    | 'close2'
    | 'star'
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
    case 'arrowDown2':
      return (
        <ArrowDown2
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          rotation={rotation}
        />
      );
    case 'star':
      return (
        <Star
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          rotation={rotation}
        />
      );
    case 'heart2':
      return (
        <Heart2
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          rotation={rotation}
        />
      );
    case 'heart3':
      return (
        <Heart3
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          rotation={rotation}
        />
      );
    case 'heart4':
      return (
        <Heart4
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          rotation={rotation}
        />
      );
    case 'arrowLeft3':
      return (
        <ArrowLeft3
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
