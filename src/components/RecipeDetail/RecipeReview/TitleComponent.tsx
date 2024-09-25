import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SubTitleComponent from '../SubTitleComponent';
import {colors, FHeight, fontStyles, FWidth} from '../../../../globalStyle';
import SvgImage from '../../elements/SvgImage';
import FButton from '../../elements/FButton';

const TitleComponent = () => {
  return (
    <View style={styles.container}>
      <SubTitleComponent title="레시피 후기" />
      <FButton buttonStyle="noneStyle" onPress={() => console.log('후기작성')}>
        <View style={styles.buttonContainer}>
          <SvgImage type="edit" width={18} height={18} />
          <Text style={[fontStyles.B_14, styles.textColor]}>후기 작성</Text>
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
    paddingVertical: FWidth * 11,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 40,
  },

  textColor: {
    color: colors.text,
    marginLeft: FWidth * 6,
  },
});
