import {StyleSheet} from 'react-native';
import React from 'react';
import FText from '../elements/FText';
import {colors, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type NextButtonProps = {
  nickname: string;
};

const NextButton = ({nickname}: NextButtonProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <FButton
      buttonStyle="noneStyle"
      fBStyle={[
        styles.buttonStyle,
        {
          backgroundColor: nickname ? colors.primary[1] : colors.b200,
        },
      ]}
      onPress={() => navigation.navigate('addBasic')}>
      <FText fStyle="B_18" color={colors.white} text="다음" />
    </FButton>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    paddingVertical: FWidth * 16,
  },
});
