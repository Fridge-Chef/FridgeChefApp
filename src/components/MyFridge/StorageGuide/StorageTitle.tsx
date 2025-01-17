import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../globalStyle';
import Close3 from '../../../utils/Svg/Close3';
import FButton from '../../elements/FButton';
import FText from '../../elements/FText';

const StorageTitle = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <FText fStyle="B_22" color={colors.black} text="재료 보관의 꿀팁" />
      <FButton
        buttonStyle="noneStyle"
        fBStyle={{
          alignItems: 'flex-end',
          width: FWidth * 50,
        }}
        onPress={() => navigation.goBack()}>
        <Close3 />
      </FButton>
    </View>
  );
};

export default StorageTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
