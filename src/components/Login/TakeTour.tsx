import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  colors,
  FHeight,
  fontFamilies,
  fontStyles,
  FWidth,
} from '../../../globalStyle';
import FButton from '../elements/FButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import FText from '../elements/FText';

type TakeTourProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const TakeTour = ({navigation}: TakeTourProps) => {
  return (
    <View style={styles.container}>
      <FButton
        buttonStyle="loginButton"
        buttonColor={colors.text}
        paddingVertical={FHeight * 14}
        onPress={() => navigation.navigate('bottomTab')}>
        <FText
          fStyle="M_18"
          color={colors.white}
          text="오늘은 그냥 둘러볼게요"
        />
      </FButton>
    </View>
  );
};

export default TakeTour;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 32,
  },
});
