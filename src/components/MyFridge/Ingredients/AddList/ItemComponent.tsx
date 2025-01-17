import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQueryClient} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FHeight, FWidth} from '../../../../../globalStyle';
import {
  useDeleteIngredients,
  useGetIngredients,
} from '../../../../api/ingredientsQuery';
import {date, ingredientCategory} from '../../../../service/MyFridge/MyFridge';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../../../store/bottomSheetStore';
import {useIngredientTitle} from '../../../../store/store';
import {ListData} from '../../../../type/types';
import IngredientClose from '../../../../utils/Svg/IngredientClose';
import Option from '../../../../utils/Svg/Option';
import FButton from '../../../elements/FButton';
import FModal from '../../../elements/FModal';
import FText from '../../../elements/FText';
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
  const [isDelete, setIsDelete] = useState(false);
  const handleAddExpiration = (title: string) => {
    bottomSheetRef.current?.present();
    setIngredientTitle(title);
    setTitle(buttonName);
  };
  const today = new Date();
  const [expiryDate, setExpiryDate] = useState<number | undefined>();
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

  useEffect(() => {
    setExpiryDate(
      item.expirationDate
        ? Math.ceil(
            (new Date(item.expirationDate).getTime() - today.getTime()) /
              (1000 * 60 * 60 * 24),
          )
        : undefined,
    );
  }, [item.expirationDate]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            expiryDate != undefined && expiryDate < 0
              ? 'rgb(255, 0, 0)'
              : colors.background,
        },
      ]}>
      <View style={styles.textContainer}>
        {ingredientCategory(item)}
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
        <FButton buttonStyle="noneStyle" onPress={() => setIsDelete(true)}>
          <IngredientClose />
        </FButton>
      </View>
      {isDelete && (
        <FModal
          modalVisible={isDelete}
          buttonText="삭제"
          text={`${item.ingredientName} 삭제하나요?`}
          onPress={() => {
            handleDelete(item.ingredientName);
            setIsDelete(false);
          }}
          cancelOnPress={() => setIsDelete(false)}
          cancel={true}
          cancelText="취소"
        />
      )}
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
