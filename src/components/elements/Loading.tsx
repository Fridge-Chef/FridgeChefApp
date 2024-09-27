import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Dimensions} from 'react-native';
import {colors} from '../../../globalStyle';
import {useLoading} from '../../store/store';
import FText from './FText';

const statusBarHeight = StatusBar.currentHeight;
const Loading = () => {
  const {loading, loadingTitle} = useLoading();

  return (
    <>
      {loading && (
        <View style={styles.background}>
          <View style={styles.indicatorContainer}>
            <ActivityIndicator
              size="large"
              color={colors.primary[1]}
              style={styles.indicatorStyle}
            />
            {/* <LottieView
              source={require('../../assets/lottie/loading.json')}
              style={{width: FWidth * 120, height: FHeight * 120}}
              autoPlay
            /> */}
            <FText fStyle="R_16" color={colors.text} text={loadingTitle} />
          </View>
        </View>
      )}
    </>
  );
};

export default Loading;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: Dimensions.get('screen').height - statusBarHeight!,
    backgroundColor: colors.white,
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

  indicatorStyle: {},
});
