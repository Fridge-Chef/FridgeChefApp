import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ingredients from '../../screen/Ingredients';
import {
  colors,
  FHeight,
  fontFamilies,
  fontStyles,
  FWidth,
} from '../../../globalStyle';
import RecRecipe from '../../screen/RecRecipe';
import SvgImage from '../elements/SvgImage';
import FButton from '../elements/FButton';
import {useNavigation} from '@react-navigation/native';

const MyFridgeScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: colors.white,
        statusBarStyle: 'dark',
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}
      initialRouteName="ingredients">
      <Stack.Screen
        name="ingredients"
        component={Ingredients}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="recRecipe"
        component={RecRecipe}
        options={{
          title: '',
          header() {
            const navigation = useNavigation();
            return (
              <View
                style={{
                  height: FHeight * 48,
                  flexDirection: 'row',
                  paddingHorizontal: FWidth * 21,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: colors.white,
                  borderBottomWidth: 1,
                  borderColor: colors.b200,
                }}>
                <FButton
                  buttonStyle="noneStyle"
                  onPress={() => navigation.goBack()}>
                  <SvgImage
                    type="back"
                    width={24}
                    height={24}
                    fill={colors.white}
                  />
                </FButton>
                <Text style={[fontStyles.B_18, {color: colors.b900}]}>
                  추천 레시피
                </Text>
                <View style={{opacity: 0}}>
                  <SvgImage
                    type="back"
                    width={24}
                    height={24}
                    fill={colors.white}
                  />
                </View>
              </View>
            );
          },
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MyFridgeScreen;

const styles = StyleSheet.create({});
