import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FHeight, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {useBottomSheetRef, useBottomSheetTitle} from '../../store/store';
const TopComponent = () => {
  const {bottomSheetRef} = useBottomSheetRef();
  const [buttonName] = useState('재료 추가');
  const {setTitle} = useBottomSheetTitle();

  const handleAddIngredient = () => {
    setTitle(buttonName);
    bottomSheetRef.current?.expand();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{`냉장고 재료들을\n등록해주세요`}</Text>
      <View>
        <FButton
          buttonStyle="iconButton"
          buttonColor="black"
          onPress={handleAddIngredient}>
          <Icon name="add-outline" size={16} color="white" />
          <Text style={styles.buttonText}>{buttonName}</Text>
        </FButton>
      </View>
    </View>
  );
};

export default TopComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  titleText: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 22,
    lineHeight: FHeight * 30,
    color: 'black',
  },

  buttonText: {
    color: 'white',
    fontFamily: 'Pretendard-Bold',
    marginLeft: FWidth * 6,
  },
});
