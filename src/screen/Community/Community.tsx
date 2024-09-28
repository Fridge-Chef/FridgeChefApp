import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontStyles, FWidth} from '../../../globalStyle';
import {useCommunityTopTabBar, useTopTabBar} from '../../store/store';
import {useEffect, useState} from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import CMyRecipe from './CMyRecipe';
import CRecipeReview from './CRecipeReview';
import {RouteProp, useRoute} from '@react-navigation/native';

const initialLayout = {width: Dimensions.get('window').width};

type IndexType = {
  params: {
    initialIndex: number;
  };
};

const Community = () => {
  const route = useRoute<RouteProp<IndexType>>();
  const {index, setIndex} = useCommunityTopTabBar();
  const [routes] = useState([
    {key: 'myRecipe', title: '나만의 레시피'},
    {key: 'recipeReview', title: '레시피 후기'},
  ]);

  const renderScene = SceneMap({
    myRecipe: CMyRecipe,
    recipeReview: CRecipeReview,
  });

  const handleIndexChange = (newIndex: number) => {
    setIndex(newIndex);
  };

  useEffect(() => {
    if (route.params?.initialIndex !== undefined) {
      setIndex(route.params.initialIndex);
    }
  }, [route.params]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      activeColor={colors.text}
      inactiveColor={colors.disabled}
      pressColor="transparent"
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={[fontStyles.B_16, styles.labelStyle]}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={handleIndexChange}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
};

export default Community;

const styles = StyleSheet.create({
  tabBar: {
    height: FWidth * 54,
    backgroundColor: colors.white,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.b200,
    elevation: 0,
  },
  indicator: {
    backgroundColor: colors.text,
    marginBottom: FWidth * -1,
  },

  labelStyle: {
    includeFontPadding: false,
  },
});
