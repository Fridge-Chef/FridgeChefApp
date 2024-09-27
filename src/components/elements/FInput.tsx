import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontFamilies, FWidth} from '../../../globalStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import FButton from './FButton';
import FText from './FText';

type FInputProps = {
  value?: string;
  deleteButton?: boolean;
  deleteValue?: () => void;
  placeholder?: string;
  inputStyle: 'default';
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
  editable = true,
  secureTextEntry = false,
  onChangeText,
  onSubmitEditing,
  keyboardType = 'default',
  maxLength = 20,
  numberOfLines = 1,
  multiline = false,
  errorMsg = false,
  errorText,
}: FInputProps) => {
  const inputStyleList = {
    default: [styles.defaultStyle],
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          underlineColorAndroid={'transparent'}
          style={inputStyleList[inputStyle]}
          placeholder={placeholder}
          editable={editable}
          placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
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
    borderColor: colors.border2,
    borderWidth: 1,
    fontSize: 16,
    color: colors.text,
    lineHeight: FWidth * 22,
    letterSpacing: -0.1,
    paddingLeft: FWidth * 12,
    paddingRight: FWidth * 30,
    height: FWidth * 52,
    fontFamily: fontFamilies.pretendardMedium,
  },

  errorContainer: {
    marginTop: FWidth * 10,
  },
});
