import {DimensionValue, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fontFamilies, FWidth} from '../../../globalStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import FButton from './FButton';
import FText from './FText';

type FInputProps = {
  value?: string;
  deleteButton?: boolean;
  deleteValue?: () => void;
  placeholder?: string;
  inputStyle: 'default' | 'recipe' | 'subRecipe' | 'noBorder';
  fontFamily?: string;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
  minHeight?: DimensionValue;
  fontSize?: number;
  editable?: boolean;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  maxLength?: number;
  numberOfLines?: number;
  multiline?: boolean;
  errorMsg?: boolean;
  errorText?: string | number;
};

const FInput = ({
  value,
  deleteButton = false,
  deleteValue,
  placeholder,
  inputStyle,
  fontFamily = fontFamilies.pretendardMedium,
  textAlignVertical,
  minHeight,
  editable = true,
  secureTextEntry = false,
  onChangeText,
  onSubmitEditing,
  keyboardType = 'default',
  maxLength,
  numberOfLines = 1,
  multiline = false,
  errorMsg = false,
  errorText,
}: FInputProps) => {
  const inputStyleList = {
    default: [styles.defaultStyle],
    recipe: styles.recipeStyle,
    subRecipe: styles.subRecipeStyle,
    noBorder: styles.noBorderStyle,
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          underlineColorAndroid={'transparent'}
          style={[
            inputStyleList[inputStyle],
            {
              textAlignVertical: textAlignVertical,
              minHeight: minHeight,
              fontFamily: fontFamily,
            },
          ]}
          placeholder={placeholder}
          editable={editable}
          placeholderTextColor={colors.disabled}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          keyboardType={keyboardType}
          maxLength={maxLength}
          numberOfLines={numberOfLines}
          multiline={multiline}
        />
        {deleteButton && (
          <View style={styles.iconContainer}>
            <FButton buttonStyle="noneStyle" onPress={deleteValue}>
              <Icon name="close-circle-outline" size={20} color="black" />
            </FButton>
          </View>
        )}
      </View>
      {errorMsg && errorText && (
        <View style={styles.errorContainer}>
          <FText fStyle="M_14" color={colors.error} text={errorText} />
        </View>
      )}
    </View>
  );
};

export default FInput;

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },

  iconContainer: {
    position: 'absolute',
    width: FWidth * 25,
    height: FWidth * 25,
    alignItems: 'center',
    justifyContent: 'center',
    right: FWidth * 8,
    top: '50%',
    transform: [{translateY: -FWidth * 12.5}],
  },

  defaultStyle: {
    borderRadius: 10,
    borderColor: colors.field,
    borderWidth: 1,
    fontSize: FWidth * 16,
    lineHeight: FWidth * 24,
    color: colors.text,
    letterSpacing: -0.1,
    paddingLeft: FWidth * 12,
    paddingRight: FWidth * 30,
    height: FWidth * 52,
  },

  recipeStyle: {
    padding: FWidth * 14,
    borderWidth: 1,
    borderColor: colors.field,
    fontSize: FWidth * 16,
    lineHeight: FWidth * 24,
    borderRadius: 10,
  },

  subRecipeStyle: {
    paddingVertical: FWidth * 14,
    paddingLeft: FWidth * 14,
    paddingRight: FWidth * 54,
    borderWidth: 1,
    borderColor: colors.field,
    fontSize: FWidth * 16,
    lineHeight: FWidth * 24,
    borderRadius: 10,
  },

  noBorderStyle: {
    fontSize: FWidth * 16,
    fontFamily: fontFamilies.pretendardRegular,
    color: colors.text,
    lineHeight: FWidth * 24,
  },

  errorContainer: {
    marginTop: FWidth * 10,
  },
});
