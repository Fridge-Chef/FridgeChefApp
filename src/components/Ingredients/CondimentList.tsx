import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FHeight, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {ingredients} from '../../utils/list';
import SubTitleComponent from './SubTitleComponent';

const CondimentList = () => {
  return (
    <View style={styles.container}>
      <SubTitleComponent title={'조미료들'} />
      <View style={styles.listContainer}>
        {ingredients.map(item => (
          <View
            key={item.id}
            style={{marginRight: FHeight * 8, marginBottom: FHeight * 10}}>
            <FButton
              buttonStyle="iconButton"
              borderWidth={1}
              buttonColor="gray"
              radius={50}>
              <Text style={styles.itemNameText}>{item.name}</Text>
              <View style={styles.closeIconContainer}>
                <Icon name="close-outline" size={16} />
              </View>
            </FButton>
          </View>
        ))}
        <FButton
          buttonStyle="iconButton"
          buttonColor="white"
          borderWidth={1}
          radius={50}>
          <Icon name="add-outline" size={16} />
          <Text style={{marginLeft: FWidth * 6, color: '#545559'}}>
            조미료 추가
          </Text>
        </FButton>
      </View>
    </View>
  );
};

export default CondimentList;

const styles = StyleSheet.create({
  container: {
    marginTop: FHeight * 30,
  },

  listContainer: {
    marginTop: FHeight * 14,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  itemNameText: {
    fontFamily: 'Pretendard-Medium',
    color: 'black',
  },

  closeIconContainer: {
    width: FWidth * 15,
    height: FWidth * 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: FWidth * 2,
  },
});
