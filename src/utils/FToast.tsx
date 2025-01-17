import React from 'react';
import {StyleSheet, View} from 'react-native';
import Toast, {ToastConfig} from 'react-native-toast-message';
import {colors, FWidth} from '../../globalStyle';
import FButton from '../components/elements/FButton';
import FText from '../components/elements/FText';
import Close3 from './Svg/Close3';

const FToast = () => {
  const handleClose = () => {
    Toast.hide();
  };

  const config: ToastConfig = {
    fToast: ({text1}) => (
      <View style={styles.container}>
        <View style={styles.toastContainer}>
          <FText fStyle="M_14" color={colors.white} text={text1} />
          <FButton buttonStyle="noneStyle" onPress={handleClose}>
            <Close3 color={colors.white} />
          </FButton>
        </View>
      </View>
    ),
  };

  return <Toast config={config} />;
};

export default FToast;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: FWidth * 22,
    marginBottom: FWidth * 86,
  },

  toastContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(44, 44, 46, 0.9)',
    paddingVertical: FWidth * 12,
    paddingHorizontal: FWidth * 14,
    borderRadius: 10,
  },
});
