import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RankArrow from '../../../utils/Svg/RankArrow';
import SubTitleComponent from '../../Ingredients/SubTitleComponent';
import {colors, FWidth} from '../../../../globalStyle';

type RankButtonProps = {
  onPress: () => void;
};

const RankButton = ({onPress}: RankButtonProps) => {
  return (
    <View style={styles.container}>
      <SubTitleComponent
        title="최근순"
        color={colors.subText}
        onPress={onPress}
      />
      <View style={{marginLeft: FWidth * 4}}>
        <RankArrow />
      </View>
    </View>
  );
};

export default RankButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
