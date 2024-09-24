import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../../globalStyle';
import FButton from '../../elements/FButton';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
  useIngredientTitle,
} from '../../../store/store';

import SubTitleComponent from '../SubTitleComponent';
import SvgImage from '../../elements/SvgImage';

type ListData = {
  title: string;
  items: {
    name: string;
    expiration: string;
  }[];
};

const AddList = () => {
  const [buttonName] = useState('유통기한 등록');
  const {setTitle} = useBottomSheetTitle();
  const {setIngredientTitle} = useIngredientTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const data = require('../../../utils/listData.json');
  const dDay = 'D -3';

  const handleAddExpiration = (title: string) => {
    bottomSheetRef.current?.expand();
    setIngredientTitle(title);
    setTitle(buttonName);
  };

  return (
    <View style={styles.container}>
      {data.map((item: ListData, index: number) => (
        <View key={index} style={{marginTop: index === 0 ? 0 : FHeight * 12}}>
          <SubTitleComponent title={item.title} color={colors.b400} />
          <View>
            {item.items.map((itemList, index) => (
              <View key={index} style={styles.itemContainer}>
                <Text style={[fontStyles.B_16, {color: colors.text}]}>
                  {itemList.name}
                </Text>
                <View style={styles.iconAndTextContainer}>
                  {dDay && (
                    <Text style={[fontStyles.B_16, {color: colors.success}]}>
                      {dDay}
                    </Text>
                  )}
                  <View style={{marginHorizontal: FWidth * 12}}>
                    <FButton
                      buttonStyle="noneStyle"
                      onPress={() => handleAddExpiration(itemList.name)}>
                      <SvgImage
                        type="calendar"
                        width={23}
                        height={23}
                        fill={'transparent'}
                      />
                    </FButton>
                  </View>
                  <FButton buttonStyle="noneStyle">
                    <SvgImage type="close" width={24} height={24} />
                  </FButton>
                </View>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default AddList;

const styles = StyleSheet.create({
  container: {
    marginTop: FHeight * 40,
    marginBottom: FHeight * 132,
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: FHeight * 12,
    paddingLeft: 18,
    paddingVertical: 16,
    paddingRight: 16,
    borderRadius: 14,
    backgroundColor: colors.background,
  },

  iconAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
