import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const DetailReviewMore = () => {
  return (
    <Svg
      width={FWidth * 24}
      height={FWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4365 20.0068C13.266 20.0068 13.9365 19.3305 13.9365 18.5031C13.9365 17.6757 13.266 17.0068 12.4365 17.0068C11.607 17.0068 10.9365 17.6757 10.9365 18.5031V18.5166C10.9365 19.344 11.607 20.0068 12.4365 20.0068ZM13.9365 12.5038C13.9365 13.3317 13.266 14.0068 12.4365 14.0068C11.607 14.0068 10.9365 13.3452 10.9365 12.5173V12.5038C10.9365 11.676 11.607 11.0068 12.4365 11.0068C13.266 11.0068 13.9365 11.676 13.9365 12.5038ZM13.9365 6.5031C13.9365 7.33053 13.266 8.00684 12.4365 8.00684C11.607 8.00684 10.9365 7.344 10.9365 6.51806V6.5031C10.9365 5.67567 11.607 5.00684 12.4365 5.00684C13.266 5.00684 13.9365 5.67567 13.9365 6.5031Z"
        fill="black"
      />
    </Svg>
  );
};

export default DetailReviewMore;

const styles = StyleSheet.create({});
