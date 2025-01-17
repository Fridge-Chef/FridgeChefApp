import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fontFamilies, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';

type TakeTourProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const TakeTour = ({navigation}: TakeTourProps) => {
  return (
    <View style={styles.container}>
      <FButton
        buttonStyle="noneStyle"
        fBStyle={styles.textContainer}
        buttonColor={colors.text}
        onPress={() => navigation.navigate('addBasic')}>
        <Text style={styles.textStyle}>그냥 둘러볼게요</Text>
      </FButton>
    </View>
  );
};

export default TakeTour;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 32,
    alignItems: 'center',
  },

  textContainer: {
    height: FWidth * 24,
  },

  textStyle: {
    fontSize: FWidth * 16,
    fontFamily: fontFamilies.pretendardMedium,
    color: colors.text,
    textDecorationLine: 'underline',
  },
});
