import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {Dimensions} from 'react-native';
import {FHeight, fontFamilies, FWidth} from '../../../globalStyle';
import {useLoading} from '../../store/store';
import LottieView from 'lottie-react-native';

const Loading = () => {
  const {loading, loadingTitle} = useLoading();
  return (
    <>
      {!loading && (
        <View style={styles.background}>
          <View style={styles.indicatorContainer}>
            {/* <ActivityIndicator
              size="large"
              color="#000000"
              style={styles.indicatorStyle}
            /> */}
            <LottieView
              source={require('../../assets/lottie/loading.json')}
              style={{width: FWidth * 120, height: FHeight * 120}}
              autoPlay
            />
            <Text style={styles.textStyle}>{loadingTitle}</Text>
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
    height: Dimensions.get('screen').height,
    backgroundColor: 'white',
    // opacity: 0.6,
    position: 'absolute',
    zIndex: 10,
  },
  indicatorContainer: {
    // flexDirection: 'row',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  indicatorStyle: {},

  textStyle: {
    color: 'black',
    marginLeft: FWidth * 8,
    fontFamily: fontFamilies.pretendardRegular,
  },
});
