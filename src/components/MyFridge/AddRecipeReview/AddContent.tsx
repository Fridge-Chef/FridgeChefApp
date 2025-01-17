import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, fontFamilies, FWidth} from '../../../../globalStyle';
import {useUserReview} from '../../../store/store';
import FInput from '../../elements/FInput';
import FText from '../../elements/FText';

const AddContent = () => {
  const {userReview, setUserReview} = useUserReview();
  const maxLength = 255;
  return (
    <View style={styles.container}>
      <FInput
        value={userReview.comment}
        inputStyle="noBorder"
        placeholder="내용을 입력하세요 (최대 255자)"
        maxLength={maxLength}
        fontFamily={fontFamilies.pretendardRegular}
        multiline
        onChangeText={text => {
          setUserReview({comment: text});
        }}
      />
      <View style={styles.textContainer}>
        <FText
          fStyle="R_12"
          color={colors.b300}
          text={`${userReview.comment.length}/${maxLength}`}
        />
      </View>
    </View>
  );
};

export default AddContent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 24,
    position: 'relative',
  },
  textContainer: {
    position: 'absolute',
    right: 0,
    bottom: FWidth * -20,
  },
});
