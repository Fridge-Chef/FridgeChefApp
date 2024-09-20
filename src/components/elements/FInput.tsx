import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {fontFamilies, FWidth} from '../../../globalStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import FButton from './FButton';

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
};

const FInput = ({
  value,
  deleteButton = false,
  deleteValue,
  placeholder,
  inputStyle,
  fontSize = 14,
  editable = true,
  secureTextEntry = false,
  onChangeText,
  onSubmitEditing,
  keyboardType = 'default',
  maxLength = 20,
  numberOfLines = 1,
  multiline = false,
}: FInputProps) => {
  const inputStyleList = {
    default: [styles.defaultStyle, {fontSize: fontSize}],
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
    borderRadius: 8,
    borderColor: '#AFB1B6',
    borderWidth: 1,
    paddingLeft: FWidth * 14,
    paddingRight: FWidth * 30,
    fontFamily: fontFamilies.pretendardMedium,
  },
});
