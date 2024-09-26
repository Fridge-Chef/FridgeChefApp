import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SubTitleComponent from '../SubTitleComponent';
import {colors, fontStyles, FWidth} from '../../../../globalStyle';
import FButton from '../../elements/FButton';
import Edit from '../../../utils/Svg/Edit';

const TitleComponent = () => {
  return (
    <View style={styles.container}>
      <SubTitleComponent title="레시피 후기" />
      <FButton buttonStyle="noneStyle" onPress={() => console.log('후기작성')}>
        <View style={styles.buttonContainer}>
          <Edit />
          <View style={styles.textLine}>
            <Text style={[fontStyles.B_14, styles.textColor]}>후기 작성</Text>
          </View>
        </View>
      </FButton>
    </View>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: FWidth * 16,
    paddingVertical: FWidth * 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 40,
  },

  textLine: {
    marginLeft: FWidth * 6,
    height: FWidth * 20,
    justifyContent: 'center',
  },

  textColor: {
    color: colors.text,
    includeFontPadding: false,
    alignItems: 'center',
  },
});
