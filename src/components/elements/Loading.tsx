import React from 'react';
import {
  ActivityIndicator,
  ColorValue,
  Dimensions,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import FText from './FText';

const statusBarHeight = StatusBar.currentHeight;
const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
const bottomBarHeight = screenHeight - (windowHeight + statusBarHeight!);
const Loading = ({
  loadingTitle,
  backColor = 'rgba(0,0,0,0.4)',
}: {
  loadingTitle: string;
  backColor?: ColorValue;
}) => {
  return (
    <View style={[styles.container, {backgroundColor: backColor}]}>
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="large" color={colors.primary[1]} />
        <FText
          mTop={FWidth * 20}
          fStyle="R_16"
          color={colors.white}
          text={loadingTitle}
        />
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight - statusBarHeight! - bottomBarHeight,
    // opacity: 0.6,
    position: 'absolute',
    zIndex: 10,
  },
  indicatorContainer: {
    // flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
