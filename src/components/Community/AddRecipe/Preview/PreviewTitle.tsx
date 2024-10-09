import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FText from '../../../elements/FText';
import {colors, FWidth} from '../../../../../globalStyle';
import UserIcon2 from '../../../../utils/Svg/UserIcon2';
import DetailUserBadge from '../../../../utils/Svg/DetailUserBadge';

type PreviewTitleProps = {
  title: string;
};

const PreviewTitle = ({title}: PreviewTitleProps) => {
  return (
    <View style={styles.container}>
      <FText fStyle="B_22" color={colors.text} text={title} />
      <View style={styles.userAlign}>
        <DetailUserBadge />
        <FText
          mLeft={FWidth * 6}
          fStyle="B_16"
          color={colors.text}
          text={'자취의신'}
        />
      </View>
    </View>
  );
};

export default PreviewTitle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: FWidth * 24,
    paddingHorizontal: FWidth * 22,
  },

  userAlign: {
    marginTop: FWidth * 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
