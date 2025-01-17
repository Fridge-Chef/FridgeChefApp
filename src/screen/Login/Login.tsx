import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import TitleComponent from '../../components/Login/TitleComponent';
import {colors, FWidth} from '../../../globalStyle';
import KakaoLogin from '../../components/Login/KakaoLogin';
import GoogleLogin from '../../components/Login/GoogleLogin';
import TakeTour from '../../components/Login/TakeTour';
import Loading from '../../components/elements/Loading';
import FastImage from '@d11/react-native-fast-image';
const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <TitleComponent />
        <View style={{alignItems: 'center', marginBottom: FWidth * 64}}>
          <FastImage
            style={{width: FWidth * 127, height: FWidth * 137}}
            source={require('../../assets/images/LogoImg.png')}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        {/* <FButton buttonStyle="noneStyle" onPress={() => handleLogout()}>
          <Text>dkdkdkdk</Text>
        </FButton> */}
        <KakaoLogin
          navigation={navigation}
          setIsLoginLoading={setIsLoginLoading}
        />
        <GoogleLogin
          navigation={navigation}
          setIsLoginLoading={setIsLoginLoading}
        />
        <TakeTour navigation={navigation} />
      </View>
      {isLoginLoading && <Loading loadingTitle="로딩중" />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: FWidth * 96,
    paddingHorizontal: FWidth * 34,
    backgroundColor: colors.white,
  },
});
