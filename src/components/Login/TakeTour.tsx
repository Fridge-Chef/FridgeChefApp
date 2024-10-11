import {StyleSheet} from 'react-native';
import React from 'react';
import {colors, FHeight} from '../../../globalStyle';
import FButton from '../elements/FButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import FText from '../elements/FText';

type TakeTourProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const TakeTour = ({navigation}: TakeTourProps) => {
  return (
    <FButton
      buttonStyle="loginButton"
      buttonColor={colors.text}
      paddingVertical={FHeight * 16}
      onPress={() => navigation.navigate('nickname')}>
      <FText fStyle="M_18" color={colors.white} text="그냥 둘러볼게요" />
    </FButton>
  );
};

export default TakeTour;

const styles = StyleSheet.create({});
