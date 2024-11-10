import {launchImageLibrary} from 'react-native-image-picker';
import {FWidth} from '../../globalStyle';

export const handleImagePicker = ({
  pickerType,
  handleImage,
}: {
  pickerType: string;
  handleImage: (imageUri: string, file: File) => void;
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
        async res => {
          if (res.didCancel) {
            console.log('취소버튼을 눌렀습니다');
          } else if (res.errorCode) {
            console.log('error: ', res.errorMessage);
          } else {
            if (res.assets![0].uri === undefined) return;
            try {
              const response = await fetch(res.assets![0].uri);
              const blob = await response.blob();
              const file = new File([blob], res.assets![0].fileName, {
                type: 'image/jpeg',
                lastModified: Date.now(),
              });
              handleImage(res.assets![0].uri, file);
            } catch (error) {
              console.error('이미지를 File으로 변환 중 에러 발생:', error);
            }
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
