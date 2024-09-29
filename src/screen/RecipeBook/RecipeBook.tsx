import {Dimensions, StyleSheet} from 'react-native';
import LikePage from './LikePage';
import MyRecipePage from './MyRecipePage';
import RecipeReviewPage from './RecipeReviewPage';
import {colors, fontStyles, FWidth} from '../../../globalStyle';
import {useTopTabBar} from '../../store/store';
import {useState} from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';

const initialLayout = {width: Dimensions.get('window').width};

const RecipeBook = () => {
  const {index, setIndex} = useTopTabBar();
  const [routes] = useState([
    {key: 'like', title: '찜하기'},
    {key: 'myRecipe', title: '나만의 레시피'},
    {key: 'recipeReview', title: '레시피 후기'},
  ]);

  const renderScene = SceneMap({
    like: LikePage,
    myRecipe: MyRecipePage,
    recipeReview: RecipeReviewPage,
  });

  const handleIndexChange = (newIndex: number) => {
    setIndex(newIndex);
  };

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

export default RecipeBook;

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
    lineHeight: FWidth * 24,
  },
});
