import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../../globalStyle';
type NameComponentProps = {
  focused: boolean;
  name: string;
};

const NameComponent = ({focused, name}: NameComponentProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          fontStyles.B_12,
          {color: focused ? colors.text : colors.disabled},
        ]}>
        {name}
      </Text>
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
