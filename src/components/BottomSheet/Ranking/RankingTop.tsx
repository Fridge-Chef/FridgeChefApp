import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../../elements/FButton';
import Close from '../../../utils/Svg/Close';
import BottomClose from '../../../utils/Svg/BottomClose';

type RankingTopProps = {
  onPress: () => void;
};

const RankingTop = ({onPress}: RankingTopProps) => {
  return (
    <View style={styles.closeIcon}>
      <FButton buttonStyle="noneStyle" onPress={onPress}>
        <BottomClose />
      </FButton>
    </View>
  );
};

export default RankingTop;

const styles = StyleSheet.create({
  closeIcon: {
    alignItems: 'flex-end',
  },
});
