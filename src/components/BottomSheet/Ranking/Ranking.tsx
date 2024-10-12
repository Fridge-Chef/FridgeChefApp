import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useBottomSheetRef, useRankName} from '../../../store/store';
import {colors, FWidth} from '../../../../globalStyle';
import RankingTop from './RankingTop';
import FText from '../../elements/FText';
import FButton from '../../elements/FButton';
import Check from '../../../utils/Svg/Check';
import {rankingMenuList} from '../../../utils/list';

const Ranking = () => {
  const {bottomSheetRef} = useBottomSheetRef();
  const handleClose = () => {
    bottomSheetRef.current?.close();
  };
  const [ranking, setRanking] = useState(1);
  const {setRankName} = useRankName();
  return (
    <View style={styles.container}>
      <RankingTop onPress={handleClose} />
      {rankingMenuList.map(item => (
        <FButton
          key={item.id}
          buttonStyle="addButton"
          fBStyle={styles.alignButton}
          onPress={() => {
            setRankName(item.text);
            setRanking(item.id);
          }}>
          <View style={{opacity: ranking === item.id ? 1 : 0}}>
            <Check />
          </View>
          <FText
            mLeft={FWidth * 6}
            fStyle="M_16"
            color={colors.black}
            text={item.text}
          />
        </FButton>
      ))}
    </View>
  );
};

export default Ranking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: FWidth * 22,
  },

  closeIcon: {
    alignItems: 'flex-end',
  },

  alignButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
