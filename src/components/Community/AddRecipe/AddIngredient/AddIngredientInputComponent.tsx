import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FWidth} from '../../../../../globalStyle';
import AddRecipeDeleteIcon from '../../../../utils/Svg/AddRecipeDeleteIcon';
import FButton from '../../../elements/FButton';
import IngredientQuantityInput from './IngredientQuantityInput';
import IngredientTitleInput from './IngredientTitleInput';

type AddIngredientInputComponentProps = {
  titleValue: string;
  quantityValue: string;
  onChangeTitleText: (text: string) => void;
  onChangeQuantityText: (text: string) => void;
  onPress: () => void;
};

const AddIngredientInputComponent = ({
  titleValue,
  quantityValue,
  onChangeTitleText,
  onChangeQuantityText,
  onPress,
}: AddIngredientInputComponentProps) => {
  return (
    <View style={styles.container}>
      <IngredientTitleInput
        value={titleValue}
        onChangeText={onChangeTitleText}
      />
      <IngredientQuantityInput
        value={quantityValue}
        onChangeText={onChangeQuantityText}
      />
      <FButton buttonStyle="noneStyle" onPress={onPress}>
        <AddRecipeDeleteIcon />
      </FButton>
    </View>
  );
};

export default AddIngredientInputComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
