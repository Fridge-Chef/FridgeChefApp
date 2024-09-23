import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import {useBottomSheetRef, useBottomSheetTitle} from '../../store/store';
import SvgImage from '../elements/SvgImage';
const TopComponent = () => {
  const {bottomSheetRef} = useBottomSheetRef();
  const [buttonName] = useState('재료 추가');
  const {setTitle} = useBottomSheetTitle();
  const [test, setTest] = useState(false);
  const handleAddIngredient = () => {
    setTitle(buttonName);
    bottomSheetRef.current?.expand();
  };

  return (
    <View>
      <View style={styles.loginContainer}>
        {test ? (
          <Text style={[fontStyles.B_16, {color: colors.b400}]}>
            로그인 하기
          </Text>
        ) : (
          <View style={styles.nameContainer}>
            <View
              style={{
                width: FWidth * 20,
                height: FWidth * 20,
                marginRight: FWidth * 8,
                borderRadius: 50,
                backgroundColor: colors.background,
              }}
            />
            <Text style={[fontStyles.B_16, {color: colors.primary[1]}]}>
              김민영님의 냉장고
            </Text>
          </View>
        )}
      </View>
      <View style={styles.container}>
        <Text
          style={[
            fontStyles.B_22,
            {color: colors.text},
          ]}>{`냉장고 재료들을\n등록해주세요`}</Text>
        <FButton
          buttonStyle="svgButton"
          radius={50}
          buttonColor={colors.text}
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
    flexDirection: 'row',
    paddingVertical: FHeight * 2,
  },

  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
