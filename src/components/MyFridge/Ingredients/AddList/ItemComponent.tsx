import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FHeight, FWidth} from '../../../../../globalStyle';
import FButton from '../../../elements/FButton';
import Calendar from '../../../../utils/Svg/Calendar';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
  useIngredientTitle,
} from '../../../../store/store';
import FText from '../../../elements/FText';
import Option from '../../../../utils/Svg/Option';
import IngredientClose from '../../../../utils/Svg/IngredientClose';
import {baseUrl} from '../../../../api/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useDeleteIngredients,
  useGetIngredients,
} from '../../../../api/ingredientsQuery';
import {useQueryClient} from '@tanstack/react-query';
import {ListData} from './AddList';

type ItemComponentProps = {
  item: ListData;
};

const ItemComponent = ({item}: ItemComponentProps) => {
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
    mutate(title, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['getIngredients'],
        });
        refetch();
      },
    });
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await baseUrl.delete(
        `/api/fridges/ingredients/${title}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.status === 204) {
      }
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  const today = new Date();
  let date = () => {
    if (!item.expirationDate) return;
    const expiryDate = new Date(item.expirationDate);
    const timeDifference = expiryDate.getTime() - today.getTime();
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    switch (dayDifference) {
      case 3:
        return 'D-3';
      case 2:
        return 'D-2';
      case 1:
        return 'D-1';
      case 0:
        return '오늘 이후 폐기';
      default:
        return '';
    }
  };

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
        {/* {item.expiry_date && <DDayText day={date()} />} */}
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
