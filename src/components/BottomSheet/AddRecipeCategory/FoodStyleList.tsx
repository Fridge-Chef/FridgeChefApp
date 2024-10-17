import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SubTitleBS from '../SubTitleBS';
import {colors, FWidth} from '../../../../globalStyle';
import {AddRecipeFoodStyleList} from '../../../utils/list';
import FButton from '../../elements/FButton';
import FText from '../../elements/FText';

type FoodStyleListProps = {
  addTitle: {foodStyle: string; foodType: string};
  setAddTitle: (addTitle: {foodStyle: string; foodType: string}) => void;
};

const FoodStyleList = ({addTitle, setAddTitle}: FoodStyleListProps) => {
  const [selectCategory, setSelectCategory] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <SubTitleBS title="요리 종류" />
      </View>
      <View style={styles.itemContainer}>
        {AddRecipeFoodStyleList.map(item => (
          <FButton
            key={item.id}
            buttonStyle="noneStyle"
            fBStyle={[
              styles.itemButton,
              {
                paddingHorizontal: FWidth * 16,
                paddingVertical: FWidth * 9,
                backgroundColor:
                  selectCategory === item.id ? colors.text : colors.white,
                borderColor:
                  selectCategory === item.id ? colors.text : colors.disabled,
              },
            ]}
            onPress={() => {
              setSelectCategory(item.id);
              setAddTitle({foodStyle: item.text, foodType: addTitle.foodType});
            }}>
            <FText
              fStyle={selectCategory === item.id ? 'B_16' : 'M_16'}
              color={
                selectCategory === item.id ? colors.white : colors.disabled
              }
              text={item.text}
            />
          </FButton>
        ))}
      </View>
    </View>
  );
};

export default FoodStyleList;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 32,
  },

  titleContainer: {
    paddingHorizontal: FWidth * 3,
  },

  itemContainer: {
    marginTop: FWidth * 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  itemButton: {
    borderRadius: 100,
    marginBottom: FWidth * 16,
    marginHorizontal: FWidth * 3,
    borderColor: colors.disabled,
    borderWidth: 1,
  },
});
