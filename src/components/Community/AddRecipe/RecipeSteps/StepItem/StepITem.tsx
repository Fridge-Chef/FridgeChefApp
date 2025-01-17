import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../../globalStyle';
import FText from '../../../../elements/FText';
import FImage from '../../../../elements/FImage';
import FButton from '../../../../elements/FButton';
import StepItemTitle from './StepItemTitle';
import StepItemInput from './StepItemInput';
import DetailReviewEdit from '../../../../../utils/Svg/DetailReviewEdit';
import AddRecipeClose from '../../../../../utils/Svg/AddRecipeClose';

type StepITemProps = {
  index: number;
  uri: string;
  deleteOnPress: () => void;
  textValue: string;
  onChangeText: (text: string) => void;
  imageOnPress: () => void;
  imageDeleteOnPress: () => void;
};

const StepITem = ({
  index = 1,
  uri,
  deleteOnPress,
  textValue,
  onChangeText,
  imageOnPress,
  imageDeleteOnPress,
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
        <View style={styles.imgContainer}>
          <FImage uri={uri} imgStyle="detailSub" borderRadius={8} />
          <View style={styles.iconContainer}>
            <FButton
              buttonStyle="noneStyle"
              fBStyle={styles.updateButton}
              onPress={imageOnPress}>
              <DetailReviewEdit />
            </FButton>
            <FButton
              buttonStyle="noneStyle"
              fBStyle={[styles.updateButton, {marginLeft: FWidth * 10}]}
              onPress={imageDeleteOnPress}>
              <AddRecipeClose />
            </FButton>
          </View>
        </View>
      )}
      {!uri && (
        <FButton
          buttonStyle="noneStyle"
          fBStyle={styles.addImageButton}
          onPress={imageOnPress}>
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

  iconContainer: {
    position: 'absolute',
    top: FWidth * 16,
    right: FWidth * 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  updateButton: {
    padding: FWidth * 6,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    elevation: 2,
  },
});
