import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';
import {FWidth} from '../../../globalStyle';

const DetailReviewLikeColor = () => {
  return (
    <Svg
      width={FWidth * 16}
      height={FWidth * 16}
      viewBox="0 0 16 16"
      fill="none">
      <G clipPath="url(#clip0_518_12689)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.78487 1.08972C6.88117 0.873039 7.09604 0.733398 7.33315 0.733398C8.02272 0.733398 8.68404 1.00733 9.17163 1.49492C9.65923 1.98252 9.93316 2.64384 9.93316 3.3334V5.40006H13.1034C13.3824 5.39744 13.6587 5.45523 13.9132 5.56948C14.1689 5.68424 14.3966 5.85321 14.5805 6.0647C14.7644 6.27619 14.9001 6.52513 14.9783 6.79428C15.0564 7.06343 15.0751 7.34635 15.033 7.62344L14.113 13.6234C14.043 14.0842 13.8088 14.5047 13.4537 14.8066C13.0993 15.1078 12.6483 15.2711 12.1834 15.2667H4.3999V6.45589L6.78487 1.08972ZM3.3999 6.7334H2.66649C2.15374 6.7334 1.66198 6.93709 1.29941 7.29966C0.936844 7.66223 0.733154 8.15398 0.733154 8.66673V13.3334C0.733154 13.8462 0.936844 14.3379 1.29941 14.7005C1.66198 15.063 2.15374 15.2667 2.66649 15.2667H3.3999V6.7334Z"
          fill="#FF6D54"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_518_12689">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default DetailReviewLikeColor;

const styles = StyleSheet.create({});
