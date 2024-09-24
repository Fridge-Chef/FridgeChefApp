import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../../globalStyle';
import FButton from '../../elements/FButton';
import SvgImage from '../../elements/SvgImage';
import Calendar from '../../Svg/Calendar';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
  useIngredientTitle,
} from '../../../store/store';
import DDayText from './DDayText';

type ItemComponentProps = {
  itemList: {
    name: string;
    expiry_date: string;
  };
};

const ItemComponent = ({itemList}: ItemComponentProps) => {
  const [buttonName] = useState('유통기한 등록');
  const {setTitle} = useBottomSheetTitle();
  const {setIngredientTitle} = useIngredientTitle();
  const {bottomSheetRef} = useBottomSheetRef();

  const handleAddExpiration = (title: string) => {
    bottomSheetRef.current?.expand();
    setIngredientTitle(title);
    setTitle(buttonName);
  };

  const today = Number.parseInt(
    new Date().toJSON().slice(0, 10).replace(/-/g, ''),
  );
  let date = () => {
    if (!itemList.expiry_date) return;
    switch (
      Number.parseInt(
        new Date(itemList.expiry_date).toJSON().slice(0, 10).replace(/-/g, ''),
      ) - today
    ) {
      case 3:
        return 'D-3';
      case 2:
        return 'D-2';
      case 1:
        return 'D-1';
      case 0:
        return 'D-day';
      default:
        return '';
    }
  };

  useEffect(() => {
    console.log('되나', date());
  }, [date]);

  return (
    <>
      <View style={styles.itemContainer}>
        <Text style={[fontStyles.B_16, {color: colors.text}]}>
          {itemList.name}
        </Text>
        <View style={styles.iconAndTextContainer}>
          {itemList.expiry_date && <DDayText day={date()} />}
          <View style={{marginHorizontal: FWidth * 12}}>
            <FButton
              buttonStyle="noneStyle"
              onPress={() => handleAddExpiration(itemList.name)}>
              <Calendar
                day={date()?.replace('D-', '')}
                expiryDate={itemList.expiry_date}
              />
            </FButton>
          </View>
          <FButton buttonStyle="noneStyle">
            <SvgImage type="close" width={24} height={24} />
          </FButton>
        </View>
      </View>
    </>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({
  iconAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
});