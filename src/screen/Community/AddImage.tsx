import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FButton from '../../components/elements/FButton';
import ImageIcon from '../../utils/Svg/ImageIcon';
import FText from '../../components/elements/FText';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

type AddImageProps = {
  reviewData: {
    id: number;
    reviewPoint: number;
    reviewContent: string;
    reviewImg: string;
  };

  setReviewData: React.Dispatch<
    React.SetStateAction<{
      id: number;
      reviewPoint: number;
      reviewContent: string;
      reviewImg: string;
    }>
  >;
};

const AddImage = ({reviewData, setReviewData}: AddImageProps) => {
  const handleImagePicker = (pickerType: string) => {
    switch (pickerType) {
      case 'imageLibrary':
        launchImageLibrary(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 277,
            maxWidth: 400,
            quality: 1,
          },
          res => {
            if (res.didCancel) {
              console.log('취소버튼을 눌렀습니다');
            } else if (res.errorCode) {
              console.log('error: ', res.errorMessage);
            } else {
              if (res.assets![0].uri === undefined) return;
              setReviewData({
                ...reviewData,
                reviewImg: res.assets![0].uri,
              });
            }
          },
        );

        break;
      case 'camera':
        launchCamera(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
            quality: 0.7,
          },
          res => {
            if (res.didCancel) {
              console.log('취소버튼을 눌렀습니다');
            } else if (res.errorCode) {
              console.log('error: ', res.errorMessage);
            } else {
              if (res.assets![0].uri === undefined) return;
              setReviewData({
                ...reviewData,
                reviewImg: res.assets![0].uri,
              });
            }
          },
        );
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <FButton
        buttonStyle="addButton2"
        onPress={() => handleImagePicker('imageLibrary')}>
        <ImageIcon />
        <FText
          mLeft={FWidth * 6}
          fStyle="M_16"
          color={colors.text}
          text="사진추가"
        />
      </FButton>
    </View>
  );
};

export default AddImage;

const styles = StyleSheet.create({
  container: {
    paddingVertical: FWidth * 16,
    paddingHorizontal: FWidth * 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: colors.b200,
  },
});
