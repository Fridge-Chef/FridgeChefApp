import {ColorValue, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';
import FButton from '../../../elements/FButton';

type SubmitProps = {
  previewOnPress: () => void;
  submitOnPress: () => void;
  backgroundColor: ColorValue;
  previewBackGroundColor: ColorValue;
};

const Submit = ({
  previewOnPress,
  submitOnPress,
  backgroundColor,
  previewBackGroundColor,
}: SubmitProps) => {
  return (
    <View style={styles.container}>
      <FButton
        buttonStyle="noneStyle"
        fBStyle={[styles.viewButton, {backgroundColor: previewBackGroundColor}]}
        onPress={previewOnPress}>
        <FText fStyle="M_18" color={colors.white} text="미리보기" />
      </FButton>
      <FButton
        buttonStyle="noneStyle"
        fBStyle={[styles.submitButton, {backgroundColor: backgroundColor}]}
        onPress={submitOnPress}>
        <FText fStyle="B_18" color={colors.white} text="작성완료" />
      </FButton>
    </View>
  );
};

export default Submit;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    paddingHorizontal: FWidth * 22,
    paddingVertical: FWidth * 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: colors.b100,
  },
  viewButton: {
    paddingVertical: FWidth * 10,
    paddingHorizontal: FWidth * 22,
    marginRight: FWidth * 10,
    borderRadius: 8,
    // backgroundColor: colors.b200,
  },

  submitButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: FWidth * 10,
    borderRadius: 8,
  },
});
