import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import FText from '../elements/FText';

type NoContentProps = {
  marginTop?: number;
  title: string;
  title2?: string;
  buttonTitle?: string;
  onPress?: () => void;
};

const NoContent = ({
  marginTop,
  title,
  title2,
  buttonTitle,
  onPress,
}: NoContentProps) => {
  return (
    <View style={[styles.container, {marginTop: marginTop}]}>
      <FText fStyle="R_16" color={colors.b500} text={title} />
      {title2 && <FText fStyle="R_16" color={colors.b500} text={title2} />}
      {buttonTitle && (
        <FButton
          buttonStyle="addButton"
          fBStyle={{
            marginTop: FWidth * 32,
            paddingHorizontal: FWidth * 20,
            backgroundColor: colors.text,
          }}
          onPress={onPress}>
          <FText fStyle="B_16" color={colors.white} text={buttonTitle} />
        </FButton>
      )}
    </View>
  );
};

export default NoContent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
