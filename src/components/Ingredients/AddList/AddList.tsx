import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {FHeight, FWidth} from '../../../../globalStyle';
import FButton from '../../elements/FButton';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
  useIngredientTitle,
} from '../../../store/store';
import DefaultComponent from './defaultComponent';
import SubTitleComponent from '../SubTitleComponent';
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

  const handleAddExpiration = (title: string) => {
    bottomSheetRef.current?.expand();
    setIngredientTitle(title);
    setTitle(buttonName);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}: {item: ListData}) => (
          <View style={styles.listContainer}>
            <SubTitleComponent title={item.title} />
            <View style={{marginTop: FHeight * 10}}>
              {item.items.map((itemList, index) => (
                <View key={index} style={styles.itemContainer}>
                  <View style={styles.iconAndTextContainer}>
                    <Icon name="star" size={16} color="#FFC107" />
                    <Text style={{marginLeft: 8}}>{itemList.name}</Text>
                  </View>
                  <View style={styles.iconAndTextContainer}>
                    <FButton
                      buttonStyle="noneStyle"
                      onPress={() => handleAddExpiration(itemList.name)}>
                      <Text style={styles.textStyle}>{buttonName}</Text>
                    </FButton>
                    <View style={styles.itemIconContainer}>
                      <Icon name="close-outline" size={20} color="black" />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <DefaultComponent
            handleAddExpiration={handleAddExpiration}
            buttonName={buttonName}
          />
        )}
      />
    </View>
  );
};

export default AddList;

const styles = StyleSheet.create({
  container: {
    marginTop: FHeight * 30,
  },

  listContainer: {
    marginBottom: FHeight * 24,
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingVertical: 12,
    paddingRight: 12,
    borderWidth: 1,
    borderColor: '#545559',
    borderRadius: 50,
    marginBottom: 10,
  },

  iconAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textStyle: {
    marginRight: 8,
    textDecorationLine: 'underline',
    color: '#545559',
  },

  itemIconContainer: {
    width: FWidth * 20,
    height: FWidth * 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
