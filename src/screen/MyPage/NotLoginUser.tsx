import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import FButton from '../../components/elements/FButton';
import FText from '../../components/elements/FText';
import NotLogin from '../../utils/Svg/NotLogin';

const NotLoginUser = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <FButton
        buttonStyle="noneStyle"
        fBStyle={{alignItems: 'center', flexGrow: 1}}
        onPress={() => navigation.navigate('serviceLogin')}>
        <View style={styles.iconContainer}>
          <NotLogin />
        </View>
        <FText
          mTop={FWidth * 8}
          fStyle="B_18"
          color={colors.text}
          text={'로그인'}
        />
      </FButton>
    </View>
  );
};

export default NotLoginUser;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 24,
    paddingVertical: FWidth * 24,
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: colors.background2,
  },
  iconContainer: {
    padding: FWidth * 8,
  },
});
