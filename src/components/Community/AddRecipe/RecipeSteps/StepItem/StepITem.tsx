import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontFamilies, FWidth} from '../../../../../../globalStyle';
import FText from '../../../../elements/FText';
import AddRecipeDeleteIcon from '../../../../../utils/Svg/AddRecipeDeleteIcon';
import FInput from '../../../../elements/FInput';
import FImage from '../../../../elements/FImage';
import FButton from '../../../../elements/FButton';
import StepItemTitle from './StepItemTitle';
import StepItemInput from './StepItemInput';

type StepITemProps = {
  index: number;
  uri: string;
  deleteOnPress: () => void;
  textValue: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
};

const StepITem = ({
  index = 1,
  uri,
  deleteOnPress,
  textValue,
  onChangeText,
  onPress,
}: StepITemProps) => {
  return (
    <View style={styles.container}>
      <StepItemTitle index={index} onPress={deleteOnPress} />
      <StepItemInput
        index={index}
        value={textValue}
        onChangeText={onChangeText}
      />
      {uri && (
        <FButton
          buttonStyle="noneStyle"
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          fBStyle={styles.imgContainer}
          onPress={onPress}>
          <FImage uri={uri} imgStyle="detailSub" alt="step이미지" />
        </FButton>
      )}
      {!uri && (
        <FButton
          buttonStyle="noneStyle"
          fBStyle={styles.addImageButton}
          onPress={onPress}>
          <FText fStyle="R_14" color={colors.text} text="+ 이미지 추가" />
        </FButton>
      )}
    </View>
  );
};

export default StepITem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.field,
    padding: FWidth * 14,
    borderRadius: FWidth * 8,
    marginBottom: FWidth * 20,
  },

  addImageButton: {
    paddingVertical: FWidth * 10,
    alignItems: 'center',
    borderRadius: FWidth * 8,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.field,
    backgroundColor: colors.background3,
  },

  imgContainer: {
    marginTop: FWidth * 8,
    position: 'relative',
  },
});
