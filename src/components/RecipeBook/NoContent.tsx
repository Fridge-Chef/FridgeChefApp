import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import FText from '../elements/FText';

type NoContentProps = {
  title: string;
  buttonTitle?: string;
  onPress?: () => void;
};

const NoContent = ({title, buttonTitle, onPress}: NoContentProps) => {
  return (
    <View style={styles.container}>
      <FText fStyle="M_18" color={colors.b400} text={title} />
      {buttonTitle && (
        <FButton
          buttonStyle="addButton"
          fBStyle={{
            marginTop: FWidth * 24,
            borderWidth: 1,
            borderColor: colors.border,
          }}
          onPress={onPress}>
          <FText fStyle="B_16" color={colors.text} text={buttonTitle} />
        </FButton>
      )}
    </View>
  );
};

export default NoContent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 244,
    alignItems: 'center',
  },
});
