import {StyleSheet} from 'react-native';
import React from 'react';
import {Path, Rect, Svg} from 'react-native-svg';

type MoreListProps = {
  buttonHeight: number;
};

const MoreList = ({buttonHeight}: MoreListProps) => {
  return (
    <Svg
      width={buttonHeight}
      height={buttonHeight}
      viewBox="0 0 36 36"
      fill="none">
      <Rect width="36" height="36" rx="18" fill="white" />
      <Rect width="36" height="36" rx="18" fill="#F4F6FA" />
      <Path
        d="M9.8421 13.634C10.1306 13.3455 10.5819 13.3193 10.9 13.5553L10.9912 13.634L18 20.6424L25.0088 13.634C25.2972 13.3455 25.7486 13.3193 26.0667 13.5553L26.1578 13.634C26.4463 13.9224 26.4725 14.3738 26.2365 14.6919L26.1578 14.783L18.5745 22.3664C18.286 22.6548 17.8346 22.681 17.5166 22.445L17.4254 22.3664L9.8421 14.783C9.5248 14.4657 9.5248 13.9513 9.8421 13.634Z"
        fill="#2C2C2E"
      />
    </Svg>
  );
};

export default MoreList;

const styles = StyleSheet.create({});
