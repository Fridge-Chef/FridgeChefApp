import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';
import AddRecipePlus from '../../../../utils/Svg/AddRecipePlus';
import FButton from '../../../elements/FButton';
import FImage from '../../../elements/FImage';
import {handleImagePicker} from '../../../../service/SingleImagePicker';
import {AddIngredientType} from '../../../../type/types';

const ImageComponent = ({
  addRecipeData,
  setAddRecipeData,
}: AddIngredientType) => {
  return (
    <FButton
      buttonStyle="noneStyle"
      onPress={() =>
        handleImagePicker({
          pickerType: 'imageLibrary',
          handleImage: (imageUri: string) => {
            setAddRecipeData({...addRecipeData, mainImage: imageUri});
          },
        })
      }>
      {addRecipeData?.mainImage ? (
        <FImage
          borderRadius={10}
          uri={addRecipeData?.mainImage}
          imgStyle="detail"
          alt="add메인이미지"
        />
      ) : (
        <View style={styles.container}>
          <View style={styles.iconAlign}>
            <AddRecipePlus />
            <FText
              mLeft={FWidth * 10}
              fStyle="R_16"
              color={colors.text}
              text="대표 이미지를 추가해주세요"
            />
          </View>
        </View>
      )}
    </FButton>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: FWidth * 277,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.disabled,
    borderRadius: 10,
    backgroundColor: colors.background3,
  },

  iconAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
