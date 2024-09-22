import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FHeight, fontStyles, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {useBottomSheetRef, useBottomSheetTitle} from '../../store/store';
import SvgImage from '../elements/SvgImage';
const TopComponent = () => {
  const {bottomSheetRef} = useBottomSheetRef();
  const [buttonName] = useState('재료 추가');
  const {setTitle} = useBottomSheetTitle();

  const handleAddIngredient = () => {
    setTitle(buttonName);
    bottomSheetRef.current?.expand();
  };

  return (
    <View>
      <View style={styles.loginContainer}>
        <Text style={[fontStyles.B_16, {color: '#999999'}]}>로그인 하기</Text>
      </View>
      <View style={styles.container}>
        <Text
          style={[
            fontStyles.B_22,
            {color: '#2C2C2E'},
          ]}>{`냉장고 재료들을\n등록해주세요`}</Text>
        <FButton
          buttonStyle="svgButton"
          radius={50}
          buttonColor="black"
          onPress={handleAddIngredient}>
          <SvgImage type="plus" width={24} height={24} />
        </FButton>
      </View>
    </View>
  );
};

export default TopComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FHeight * 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  loginContainer: {
    paddingVertical: FHeight * 2,
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
