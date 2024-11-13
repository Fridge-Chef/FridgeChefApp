import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FAppBar from '../../elements/FAppBar';
import AppBarMenu from '../../elements/AppBarMenu';
import {FWidth} from '../../../../globalStyle';
import {useScrollY} from '../../../store/utillStore';

const RecipeDetailAppBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const {scrollY} = useScrollY();
  return (
    <View style={{position: 'relative'}}>
      <FAppBar
        type="detailBack"
        rightOn={true}
        rType1="detailHeart"
        rType2="detailShare"
        rType3={'detailReviewMore'}
        onPress1={() => {}}
        onPress2={() => {}}
        shadow
        elevation={scrollY > 0 ? 5 : 0}
        onPress3={() => setIsClicked(!isClicked)}
      />
      {isClicked && (
        <View style={styles.menuContainer}>
          <AppBarMenu
            id={1}
            updateOnPress={() => {}}
            deleteOnPress={() => {}}
          />
        </View>
      )}
    </View>
  );
};

export default RecipeDetailAppBar;

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    right: 22,
    top: FWidth * 60,
  },
});
