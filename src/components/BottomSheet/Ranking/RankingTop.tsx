import React from 'react';
import {StyleSheet, View} from 'react-native';
import BottomClose from '../../../utils/Svg/BottomClose';
import FButton from '../../elements/FButton';

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
