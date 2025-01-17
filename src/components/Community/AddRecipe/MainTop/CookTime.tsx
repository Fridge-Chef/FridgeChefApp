import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import FInput from '../../../elements/FInput';
import FText from '../../../elements/FText';

type CookTimeProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const CookTime = ({value, onChangeText}: CookTimeProps) => {
  return (
    <View style={styles.container}>
      <FInput
        value={value}
        inputStyle="recipe"
        placeholder="조리시간을 ‘분' 단위로 입력하세요"
        textAlign="right"
        maxLength={5}
        keyboardType="number-pad"
        recipe2PaddingRight={FWidth * 44}
        onChangeText={onChangeText}
      />
      <View style={styles.textContainer}>
        <FText fStyle="M_16" color={colors.text} text={'분'} />
      </View>
    </View>
  );
};

export default CookTime;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 8,
    position: 'relative',
  },

  textContainer: {
    position: 'absolute',
    top: FWidth * 16,
    right: FWidth * 18,
  },
});
