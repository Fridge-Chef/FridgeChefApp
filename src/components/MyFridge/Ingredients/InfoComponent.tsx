import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Info from '../../../utils/Svg/Info';
import FText from '../../elements/FText';
import {colors, FWidth} from '../../../../globalStyle';
import FButton from '../../elements/FButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const InfoComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <FButton
      buttonStyle="noneStyle"
      fBStyle={styles.container}
      onPress={() => navigation.navigate('storageGuide')}>
      <View style={styles.alignText}>
        <Info />
        <FText
          mLeft={FWidth * 6}
          fStyle="M_14"
          color={colors.text}
          text="냉장 vs 실온 보관 재료, 간단히 구분해드릴게요!"
        />
      </View>
    </FButton>
  );
};

export default InfoComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 24,
    paddingHorizontal: FWidth * 22,
  },

  alignText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
