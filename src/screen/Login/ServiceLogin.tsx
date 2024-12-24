import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FWidth} from '../../../globalStyle';
import KakaoLogin from '../../components/Login/KakaoLogin';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import GoogleLogin from '../../components/Login/GoogleLogin';

const ServiceLogin = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <KakaoLogin
          navigation={navigation}
          setIsLoginLoading={setIsLoginLoading}
        />
        <GoogleLogin
          navigation={navigation}
          setIsLoginLoading={setIsLoginLoading}
        />
      </View>
    </View>
  );
};

export default ServiceLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: FWidth * 34,
    backgroundColor: 'white',
  },

  loginContainer: {
    marginTop: FWidth * 224,
  },
});
