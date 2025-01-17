import React from 'react';
import {StyleSheet} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const DetailReviewLike = () => {
  return (
    <Svg
      width={FWidth * 16}
      height={FWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M4.66671 7.33301L7.33337 1.33301C7.86381 1.33301 8.37252 1.54372 8.74759 1.91879C9.12266 2.29387 9.33337 2.80257 9.33337 3.33301V5.99967H13.1067C13.3 5.99749 13.4914 6.03734 13.6678 6.11649C13.8441 6.19563 14.0011 6.31216 14.1279 6.45802C14.2548 6.60387 14.3484 6.77556 14.4023 6.96118C14.4562 7.1468 14.469 7.34191 14.44 7.53301L13.52 13.533C13.4718 13.8509 13.3103 14.1407 13.0653 14.349C12.8203 14.5573 12.5083 14.67 12.1867 14.6663H4.66671M4.66671 7.33301V14.6663M4.66671 7.33301H2.66671C2.31309 7.33301 1.97395 7.47348 1.7239 7.72353C1.47385 7.97358 1.33337 8.31272 1.33337 8.66634V13.333C1.33337 13.6866 1.47385 14.0258 1.7239 14.2758C1.97395 14.5259 2.31309 14.6663 2.66671 14.6663H4.66671"
        stroke="#777777"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default DetailReviewLike;

const styles = StyleSheet.create({});
