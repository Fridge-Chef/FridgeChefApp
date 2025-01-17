import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import FButton from '../../../elements/FButton';
import FText from '../../../elements/FText';

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
