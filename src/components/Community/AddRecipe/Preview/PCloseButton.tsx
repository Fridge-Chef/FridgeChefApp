import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';
import FButton from '../../../elements/FButton';
import {useNavigation} from '@react-navigation/native';

const PCloseButton = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.viewContainer}>
      <View style={styles.container}>
        <FButton
          buttonStyle="noneStyle"
          fBStyle={styles.buttonContainer}
          onPress={() => navigate.goBack()}>
          <FText fStyle="B_18" color={colors.white} text={'미리보기 종료'} />
        </FButton>
      </View>
    </View>
  );
};

export default PCloseButton;

const styles = StyleSheet.create({
  viewContainer: {
    paddingTop: FWidth * 28,
    backgroundColor: colors.white,
  },

  container: {
    borderTopWidth: 1,
    borderColor: colors.b200,
    paddingVertical: FWidth * 8,
    paddingHorizontal: FWidth * 22,
  },

  buttonContainer: {
    paddingVertical: FWidth * 10,
    alignItems: 'center',
    backgroundColor: colors.text,
    borderRadius: 8,
  },
});
