import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../globalStyle';
import TopComponent from '../../components/Ingredients/TopComponent';
import CondimentList from '../../components/Ingredients/CondimentList';
import AddList from '../../components/Ingredients/AddList/AddList';
import FButton from '../../components/elements/FButton';
import {useLoading} from '../../store/store';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LoginAndUser from '../../components/Ingredients/LoginAndUser';
import FText from '../../components/elements/FText';
const Ingredients = () => {
  const {setLoading, setLoadingTitle} = useLoading();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleSearch = () => {
    setLoadingTitle('레시피 검색중');
    setLoading(true);
    if (setLoading) {
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('recRecipe');
      }, 1000);
    } else {
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        <LoginAndUser />
        <TopComponent />
        <CondimentList />
        <View
          style={{
            flex: 1,
          }}>
          <AddList />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <FButton
          buttonStyle="bigButton"
          buttonColor={colors.primary[1]}
          onPress={handleSearch}>
          <FText
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
    paddingHorizontal: FWidth * 22,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    marginBottom: FHeight * 38,
  },
});
