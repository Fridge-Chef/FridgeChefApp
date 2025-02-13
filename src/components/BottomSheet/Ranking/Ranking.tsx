import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../globalStyle';
import {useBottomSheetRef} from '../../../store/bottomSheetStore';
import {useRankName} from '../../../store/rankingStore';
import Check from '../../../utils/Svg/Check';
import {rankingMenuList} from '../../../utils/list';
import FButton from '../../elements/FButton';
import FText from '../../elements/FText';
import RankingTop from './RankingTop';

const Ranking = () => {
  const {bottomSheetRef} = useBottomSheetRef();
  const handleClose = () => {
    bottomSheetRef.current?.close();
  };

  const {setRankName, rankingId, setRankingId} = useRankName();
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
            setRankingId(item.id);
            bottomSheetRef.current?.close();
          }}>
          {rankingId === item.id && <Check />}
          <FText
            mLeft={FWidth * 6}
            fStyle={rankingId === item.id ? 'B_16' : 'R_16'}
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
    paddingTop: FWidth * 16,
    paddingBottom: FWidth * 32,
    paddingHorizontal: FWidth * 22,
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
