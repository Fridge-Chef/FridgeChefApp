import {launchImageLibrary} from 'react-native-image-picker';
import {FWidth} from '../../globalStyle';

export const handleImagePicker = ({
  pickerType,
  handleImage,
}: {
  pickerType: string;
  handleImage: (imageUri: string) => void;
}) => {
  switch (pickerType) {
    case 'imageLibrary':
      launchImageLibrary(
        {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: FWidth * 1920,
          maxWidth: 1080,
          quality: 0.7,
        },
        res => {
          if (res.didCancel) {
            console.log('취소버튼을 눌렀습니다');
          } else if (res.errorCode) {
            console.log('error: ', res.errorMessage);
          } else {
            if (res.assets![0].uri === undefined) return;
            handleImage(res.assets![0].uri);
          }
        },
      );

      break;
    // case 'camera':
    //   launchCamera(
    //     {
    //       mediaType: 'photo',
    //       includeBase64: false,
    //       maxHeight: FWidth * 1920,
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
    //         setAddRecipeData({
    //           ...addRecipeData,
    //           mainImage: res.assets![0].uri,
    //         });
    //       }
    //     },
    //   );
    //   break;
    default:
      break;
  }
};
