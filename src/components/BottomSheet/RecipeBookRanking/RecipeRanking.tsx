import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../globalStyle';
import {useBottomSheetRef} from '../../../store/bottomSheetStore';
import Check from '../../../utils/Svg/Check';
import {RecipeBookRankingList} from '../../../utils/list';
import FButton from '../../elements/FButton';
import FText from '../../elements/FText';
import RankingTop from './RankingTop';

type RecipeRankingProps = {
  setRankName: (text: string) => void;
  rankingId: number;
  setRankingId: (id: number) => void;
};

const RecipeRanking = ({
  setRankName,
  rankingId,
  setRankingId,
}: RecipeRankingProps) => {
  const {bottomSheetRef} = useBottomSheetRef();
  const handleClose = () => {
    bottomSheetRef.current?.close();
  };

  const handleRanking = (text: string, id: number) => {
    setRankName(text);
    setRankingId(id);
  };
  return (
    <View style={styles.container}>
      <RankingTop onPress={handleClose} />
      {RecipeBookRankingList.map(item => (
        <FButton
          key={item.id}
          buttonStyle="addButton"
          fBStyle={styles.alignButton}
          onPress={() => {
            handleRanking(item.text, item.id);
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

export default RecipeRanking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: FWidth * 16,
    paddingHorizontal: FWidth * 22,
    paddingBottom: FWidth * 32,
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
