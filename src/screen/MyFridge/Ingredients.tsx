import * as Kakao from '@react-native-seoul/kakao-login';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useQueryClient} from '@tanstack/react-query';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import AddList from '../../components/MyFridge/Ingredients/AddList/AddList';
import CondimentButton from '../../components/MyFridge/Ingredients/CondimentButton';
import InfoComponent from '../../components/MyFridge/Ingredients/InfoComponent';
import LoginAndUser from '../../components/MyFridge/Ingredients/LoginAndUser';
import TopComponent from '../../components/MyFridge/Ingredients/TopComponent';
import FButton from '../../components/elements/FButton';
import FText from '../../components/elements/FText';
import {useIngredientList} from '../../store/store';
import SearchIcon from '../../utils/Svg/SearchIcon';
const Ingredients = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [onClicked, setonClicked] = useState(1);
  const {ingredientList, setIngredientList} = useIngredientList();

  const cliaa = useQueryClient();
  const handleSearch = () => {
    navigation.navigate('recRecipe');
  };

  // 테스트용 함수
  const handleTest = async () => {
    Kakao.unlink();
    // await AsyncStorage.removeItem('token');
    // await AsyncStorage.removeItem('nickname');
    // await AsyncStorage.removeItem('myIngredients');
    // cliaa.removeQueries({
    //   queryKey: ['recipeList'],
    // });
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
        <AddList
          onClicked={onClicked}
          dataList={ingredientList}
          setDataList={setIngredientList}
        />
      </ScrollView>
      {ingredientList.length > 0 && (
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
      )}
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
