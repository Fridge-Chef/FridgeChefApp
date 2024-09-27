import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Toast, {ToastConfig} from 'react-native-toast-message';
import FText from '../components/elements/FText';
import {colors, FWidth} from '../../globalStyle';
import Close3 from './Svg/Close3';
import FButton from '../components/elements/FButton';

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
    marginBottom: FWidth * 62,
  },

  toastContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2C2C2E',
    paddingVertical: FWidth * 10,
    paddingHorizontal: FWidth * 12,
    borderRadius: 8,
  },
});
