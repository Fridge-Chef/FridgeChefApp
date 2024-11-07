import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FHeight, FWidth} from '../../../../../globalStyle';
import FButton from '../../../elements/FButton';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
  useIngredientTitle,
} from '../../../../store/store';
import FText from '../../../elements/FText';
import Option from '../../../../utils/Svg/Option';
import IngredientClose from '../../../../utils/Svg/IngredientClose';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useDeleteIngredients,
  useGetIngredients,
} from '../../../../api/ingredientsQuery';
import {useQueryClient} from '@tanstack/react-query';
import {date} from '../../../../service/MyFridge/MyFridge';
import {ListData} from '../../../../type/types';
import DDayText from './DDayText';

type ItemComponentProps = {
  item: ListData;
  fetchData: () => void;
};

const ItemComponent = ({item, fetchData}: ItemComponentProps) => {
  const {refetch} = useGetIngredients();
  const queryClient = useQueryClient();
  const [buttonName] = useState('유통기한 등록');
  const {setTitle} = useBottomSheetTitle();
  const {setIngredientTitle} = useIngredientTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const {mutate} = useDeleteIngredients();
  const handleAddExpiration = (title: string) => {
    bottomSheetRef.current?.present();
    setIngredientTitle(title);
    setTitle(buttonName);
  };

  const handleDelete = async (title: string) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      mutate(title, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['getIngredients'],
          });
          refetch();
        },
      });
    } else {
      const storedData = await AsyncStorage.getItem('ingredients');
      const data = storedData ? JSON.parse(storedData) : [];
      const newData = data.filter(
        (item: ListData) => item.ingredientName !== title,
      );
      await AsyncStorage.setItem('ingredients', JSON.stringify(newData));
      fetchData();
    }
  };
  const today = new Date();
  const time = date({item, today});
  console.log('time', time);

  useEffect(() => {}, [date]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View
          style={{
            height: 20,
            width: 16,
            backgroundColor: colors.black,
          }}
        />
        <View style={styles.titleContainer}>
          <FText fStyle="M_16" color={colors.text} text={item.ingredientName} />
        </View>
        {item.expirationDate && <DDayText day={date({item, today})} />}
      </View>
      <View style={styles.iconAndTextContainer}>
        <View style={{marginRight: FWidth * 12}}>
          <FButton
            buttonStyle="noneStyle"
            onPress={() => handleAddExpiration(item.ingredientName)}>
            <Option />
          </FButton>
        </View>
        <FButton
          buttonStyle="noneStyle"
          onPress={() => handleDelete(item.ingredientName)}>
          <IngredientClose />
        </FButton>
      </View>
    </View>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: FHeight * 12,
    padding: FWidth * 14,
    borderRadius: 14,
    backgroundColor: colors.background,
  },

  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleContainer: {
    marginLeft: FWidth * 4,
    marginRight: FWidth * 6,
  },

  iconAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
