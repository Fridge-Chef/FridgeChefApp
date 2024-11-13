import {Keyboard, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import FButton from '../../elements/FButton';
import ImageIcon from '../../../utils/Svg/ImageIcon';
import FText from '../../elements/FText';
import {launchImageLibrary} from 'react-native-image-picker';
import {useUserReview} from '../../../store/store';

const AddImage = () => {
  const {userReview, setUserReview} = useUserReview();
  const handleImagePicker = (pickerType: string) => {
    switch (pickerType) {
      case 'imageLibrary':
        launchImageLibrary(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 1920,
            maxWidth: 1080,
            quality: 0.7,
            selectionLimit: 5,
          },
          res => {
            if (res.didCancel) {
              console.log('취소버튼을 눌렀습니다');
            } else if (res.errorCode) {
              console.log('error: ', res.errorMessage);
            } else {
              if (!res.assets || res.assets.length === 0) return;
              setUserReview({
                images: [
                  ...(userReview.images || []),
                  ...res.assets.map(img => img.uri!),
                ],
                imagesFile: [
                  ...(userReview.imagesFile || []),
                  ...res.assets.map(img => ({
                    name: img.fileName!,
                    type: img.type!,
                    uri: img.uri!,
                  })),
                ],
              });
              Keyboard.dismiss();
            }
          },
        );

        break;
      // case 'camera':
      //   launchCamera(
      //     {
      //       mediaType: 'photo',
      //       includeBase64: false,
      //       maxHeight: 1920,
      //       maxWidth: 1080,
      //       quality: 0.7,
      //     },
      //     res => {
      //       if (res.didCancel) {
      //         console.log('취소버튼을 눌렀습니다');
      //       } else if (res.errorCode) {
      //         console.log('error: ', res.errorMessage);
      //       } else {
      //         if (res.assets![0].uri === undefined) return;
      //         setUserReview({
      //           reviewImg: res.assets![0].uri,
      //         });
      //       }
      //     },
      //   );
      //   break;
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
    paddingVertical: FWidth * 10,
    paddingHorizontal: FWidth * 22,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: colors.b200,
  },
});
