import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import {handleImagePicker} from '../../../../service/SingleImagePicker';
import {AddIngredientPageType} from '../../../../type/types';
import AddRecipePlus from '../../../../utils/Svg/AddRecipePlus';
import ImageIcon from '../../../../utils/Svg/ImageIcon';
import FButton from '../../../elements/FButton';
import FImage from '../../../elements/FImage';
import FText from '../../../elements/FText';

const ImageComponent = ({
  addRecipeData,
  setAddRecipeData,
}: AddIngredientPageType) => {
  const handleImage = () =>
    handleImagePicker({
      pickerType: 'imageLibrary',
      handleImage: (
        imageUri: string,
        file: {
          name: string;
          type: string;
          uri: string;
        },
      ) => {
        setAddRecipeData({
          ...addRecipeData,
          mainImage: imageUri,
          mainImageFile: file,
        });
      },
    });

  return (
    <View style={styles.mainContainer}>
      {addRecipeData?.mainImage ? (
        <View style={styles.imgContainer}>
          <FImage
            borderRadius={10}
            uri={addRecipeData?.mainImage}
            imgStyle="detail"
          />
          <FButton
            buttonStyle="noneStyle"
            fBStyle={[styles.iconAlign, styles.editButton]}
            onPress={handleImage}>
            <ImageIcon />
            <FText
              mLeft={FWidth * 6}
              fStyle="M_16"
              color={colors.text}
              text={'사진 변경'}
            />
          </FButton>
        </View>
      ) : (
        <FButton buttonStyle="noneStyle" onPress={handleImage}>
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
        </FButton>
      )}
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: FWidth * 22,
  },

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

  imgContainer: {
    position: 'relative',
  },

  editButton: {
    position: 'absolute',
    top: FWidth * 20,
    left: FWidth * 20,
    paddingVertical: FWidth * 8,
    paddingHorizontal: FWidth * 14,
    borderRadius: 40,
    backgroundColor: colors.white,
    elevation: 2,
  },
});
