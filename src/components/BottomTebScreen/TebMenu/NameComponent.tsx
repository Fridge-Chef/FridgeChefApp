import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FHeight, fontFamilies, FWidth} from '../../../../globalStyle';
type NameComponentProps = {
  focused: boolean;
  name: string;
};

const NameComponent = ({focused, name}: NameComponentProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.titleText, {color: focused ? '#2C2C2E' : '#BCBCC4'}]}>
        {name}
      </Text>
    </View>
  );
};

export default NameComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FHeight * 4,
    paddingVertical: FHeight * 2,
    paddingHorizontal: FWidth * 8,
  },

  titleText: {
    fontSize: 12,
    fontFamily: fontFamilies.pretendardBold,
    lineHeight: FHeight * 18,
    letterSpacing: -0.2,
  },
});
