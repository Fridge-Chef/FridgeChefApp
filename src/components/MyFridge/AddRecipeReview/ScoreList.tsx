import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FWidth} from '../../../../globalStyle';
import {useUserReview} from '../../../store/store';
import StarReview1 from '../../../utils/Svg/StarReview1';
import StarReview2 from '../../../utils/Svg/StarReview2';
import FButton from '../../elements/FButton';

type ReviewType = {
  id: number;
  score: number;
  clicked: boolean;
};

const ScoreList = () => {
  const {userReview, setUserReview} = useUserReview();
  const [reViewPoint, setReViewPoint] = useState<ReviewType[]>(
    Array.from({length: 5}, (_, index) => ({
      id: index + 1,
      score: index + 1,
      clicked: index + 1 <= userReview.star,
    })),
  );
  useEffect(() => {
    setReViewPoint(prev =>
      prev.map(item => ({
        ...item,
        clicked: item.score <= userReview.star,
      })),
    );
  }, [userReview.star]);

  const handlePress = (id: number) => {
    const clickedPoint = reViewPoint.find(item => item.id === id)?.score || 0;
    setUserReview({star: clickedPoint});
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
