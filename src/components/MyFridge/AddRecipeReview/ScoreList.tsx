import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FWidth} from '../../../../globalStyle';
import FButton from '../../elements/FButton';
import StarReview2 from '../../../utils/Svg/StarReview2';
import StarReview1 from '../../../utils/Svg/StarReview1';
import {useUserReview} from '../../../store/store';

type ReviewType = {
  id: number;
  score: number;
  clicked: boolean;
};

const ScoreList = () => {
  const {setUserReview} = useUserReview();
  const [reViewPoint, setReViewPoint] = useState<ReviewType[]>([
    {id: 1, score: 1, clicked: false},
    {id: 2, score: 2, clicked: false},
    {id: 3, score: 3, clicked: false},
    {id: 4, score: 4, clicked: false},
    {id: 5, score: 5, clicked: false},
  ]);

  const handlePress = (id: number) => {
    const clickedPoint = reViewPoint.find(item => item.id === id)?.score || 0;
    setUserReview({reviewPoint: clickedPoint});
    setReViewPoint(prev =>
      prev.map(item => ({
        ...item,
        clicked: item.score <= clickedPoint,
      })),
    );
  };

  return (
    <View style={styles.container}>
      {reViewPoint.map(item => (
        <FButton
          key={item.id}
          buttonStyle="noneStyle"
          fBStyle={{
            marginHorizontal: FWidth * 4,
          }}
          onPress={() => handlePress(item.id)}>
          {item.clicked ? <StarReview2 /> : <StarReview1 />}
        </FButton>
      ))}
    </View>
  );
};

export default ScoreList;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 16,
    flexDirection: 'row',
  },
});
