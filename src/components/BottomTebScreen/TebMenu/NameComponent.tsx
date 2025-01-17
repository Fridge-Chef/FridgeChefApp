import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fontFamilies, FWidth} from '../../../../globalStyle';

type NameComponentProps = {
  focused: boolean;
  name: string;
};

const NameComponent = ({focused, name}: NameComponentProps) => {
  return (
    <View style={styles.container}>
      {/* <FText
        fStyle="B_12"
        color={focused ? colors.text : colors.disabled}
        text={name}
      /> */}
      <Text
        style={[
          styles.textStyle,
          {color: `${focused ? colors.text : colors.disabled}`},
        ]}>
        {name}
      </Text>
    </View>
  );
};

export default NameComponent;

const styles = StyleSheet.create({
  container: {
    marginBottom: FWidth * 4,
    paddingVertical: FWidth * 2,
    paddingHorizontal: FWidth * 8,
  },

  textStyle: {
    fontFamily: fontFamilies.pretendardBold,
    fontSize: FWidth * 11,
  },
});
