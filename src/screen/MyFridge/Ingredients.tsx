import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../globalStyle';
import TopComponent from '../../components/MyFridge/Ingredients/TopComponent';
import AddList from '../../components/MyFridge/Ingredients/AddList/AddList';
import FButton from '../../components/elements/FButton';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
  useLoading,
} from '../../store/store';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LoginAndUser from '../../components/MyFridge/Ingredients/LoginAndUser';
import FText from '../../components/elements/FText';
import CondimentButton from '../../components/MyFridge/Ingredients/CondimentButton';
import InfoComponent from '../../components/MyFridge/Ingredients/InfoComponent';
import SearchIcon from '../../utils/Svg/SearchIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Ingredients = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [onClicked, setonClicked] = useState(1);

  const handleSearch = () => {
    navigation.navigate('recRecipe');
  };

  // 테스트용 함수
  const handleTest = async () => {
    await AsyncStorage.removeItem('token');
  };

  return (
    <View style={styles.container}>
      <LoginAndUser />
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        <TouchableOpacity onPress={handleTest}>
          <TopComponent />
        </TouchableOpacity>
        <CondimentButton onClicked={onClicked} setonClicked={setonClicked} />
        <InfoComponent />
        <AddList onClicked={onClicked} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <FButton
          buttonStyle="bigButton"
          fBStyle={styles.buttonStyle}
          buttonColor={colors.primary[1]}
          onPress={handleSearch}>
          <SearchIcon />
          <FText
            mLeft={FWidth * 6}
            fStyle="B_18"
            color={colors.white}
            text="이 재료로 레시피 검색"
          />
        </FButton>
      </View>
    </View>
  );
};

export default Ingredients;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  buttonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },

  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
