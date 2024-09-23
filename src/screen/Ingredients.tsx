import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../globalStyle';
import TopComponent from '../components/Ingredients/TopComponent';
import CondimentList from '../components/Ingredients/CondimentList';
import AddList from '../components/Ingredients/AddList/AddList';
import FButton from '../components/elements/FButton';
import {useLoading} from '../store/store';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
const Ingredients = () => {
  const {setLoading} = useLoading();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleSearch = () => {
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
          title="이 재료로 레시피 검색"
          style={fontStyles.B_18}
          titleColor={colors.white}
          onPress={handleSearch}
        />
      </View>
    </View>
  );
};

export default Ingredients;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: FHeight * 16,
    marginHorizontal: FWidth * 20,
    backgroundColor: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    marginBottom: FHeight * 21,
  },
});
