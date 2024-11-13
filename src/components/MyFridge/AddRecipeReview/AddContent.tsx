import {StyleSheet, View} from 'react-native';
import React from 'react';
import {fontFamilies, FWidth} from '../../../../globalStyle';
import FInput from '../../elements/FInput';
import {useUserReview} from '../../../store/store';

const AddContent = () => {
  const {userReview, setUserReview} = useUserReview();
  return (
    <View style={styles.container}>
      <FInput
        value={userReview.comment}
        inputStyle="noBorder"
        placeholder="내용을 입력하세요"
        fontFamily={fontFamilies.pretendardRegular}
        multiline
        onChangeText={text => {
          setUserReview({comment: text});
        }}
      />
    </View>
  );
};

export default AddContent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 24,
  },
});
