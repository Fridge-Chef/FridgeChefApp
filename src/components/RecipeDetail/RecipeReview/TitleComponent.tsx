import {StyleSheet, View} from 'react-native';
import React from 'react';
import SubTitleComponent from '../SubTitleComponent';
import {colors, FWidth} from '../../../../globalStyle';
import FButton from '../../elements/FButton';
import Edit from '../../../utils/Svg/Edit';
import FText from '../../elements/FText';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const TitleComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <SubTitleComponent title="레시피 후기" />
      <FButton
        buttonStyle="noneStyle"
        onPress={() => navigation.navigate('addRecipe')}>
        <View style={styles.buttonContainer}>
          <Edit />
          <FText
            mLeft={FWidth * 6}
            fStyle="B_14"
            color={colors.text}
            text="후기 작성"
          />
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
});
