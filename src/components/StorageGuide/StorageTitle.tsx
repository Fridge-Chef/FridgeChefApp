import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FText from '../elements/FText';
import FButton from '../elements/FButton';
import Close from '../../utils/Svg/Close';
import {colors, FWidth} from '../../../globalStyle';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
        <Close />
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
