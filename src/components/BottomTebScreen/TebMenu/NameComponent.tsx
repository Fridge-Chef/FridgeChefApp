import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';
type NameComponentProps = {
  focused: boolean;
  name: string;
};

const NameComponent = ({focused, name}: NameComponentProps) => {
  return (
    <View style={styles.container}>
      <FText
        fStyle="B_12"
        color={focused ? colors.text : colors.disabled}
        text={name}
      />
    </View>
  );
};

export default NameComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 4,
    paddingVertical: FWidth * 2,
    paddingHorizontal: FWidth * 8,
  },
});
