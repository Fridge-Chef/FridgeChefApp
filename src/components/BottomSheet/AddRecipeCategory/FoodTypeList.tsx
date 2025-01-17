import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../globalStyle';
import {AddRecipeFoodTypeList} from '../../../utils/list';
import FButton from '../../elements/FButton';
import FText from '../../elements/FText';
import SubTitleBS from '../SubTitleBS';

type FoodTypeListProps = {
  addTitle: {foodStyle: string; foodType: string};
  setAddTitle: (addTitle: {foodStyle: string; foodType: string}) => void;
};

const FoodTypeList = ({addTitle, setAddTitle}: FoodTypeListProps) => {
  const [selectedType, setSelectedType] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <SubTitleBS title="요리 유형" />
      </View>
      <View style={styles.itemContainer}>
        {AddRecipeFoodTypeList.map(item => (
          <FButton
            key={item.id}
            buttonStyle="noneStyle"
            fBStyle={[
              styles.itemButton,
              {
                paddingHorizontal: FWidth * 16,
                paddingVertical: FWidth * 9,
                backgroundColor:
                  selectedType === item.id ? colors.text : colors.white,
                borderColor:
                  selectedType === item.id ? colors.text : colors.disabled,
              },
            ]}
            onPress={() => {
              setSelectedType(item.id);
              setAddTitle({foodStyle: addTitle.foodStyle, foodType: item.text});
            }}>
            <FText
              fStyle={selectedType === item.id ? 'B_16' : 'M_16'}
              color={selectedType === item.id ? colors.white : colors.disabled}
              text={item.text}
            />
          </FButton>
        ))}
      </View>
    </View>
  );
};

export default FoodTypeList;

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
