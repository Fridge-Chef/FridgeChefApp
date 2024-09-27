import Toast from 'react-native-toast-message';

type ToastProps = {
  text: string;
  time: number;
};

export const showToast = ({text, time}: ToastProps) => {
  Toast.show({
    type: 'fToast',
    text1: text,
    visibilityTime: time,
    position: 'bottom',
  });
};
