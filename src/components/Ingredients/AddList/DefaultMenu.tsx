import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../../elements/FButton';
import {FHeight, FWidth} from '../../../../globalStyle';
import {itemList} from '../../../utils/list';
import Icon from 'react-native-vector-icons/Ionicons';
import SubTitleComponent from '../SubTitleComponent';

type DefaultMenuProps = {
  handleAddExpiration: (title: string) => void;
  buttonName: string;
};

const DefaultMenu = ({handleAddExpiration, buttonName}: DefaultMenuProps) => {
  return (
    <View>
      <View style={{marginBottom: FHeight * 10}}>
        <SubTitleComponent title={'기본 재료들'} />
      </View>
      {itemList.map(item => (
        <View key={item.id}>
          <View style={styles.itemContainer}>
            <View style={styles.iconAndTextContainer}>
              <Icon name="star" size={16} color="#FFC107" />
              <Text style={{marginLeft: 8}}>{item.name}</Text>
            </View>
            <View style={styles.iconAndTextContainer}>
              <FButton
                buttonStyle="noneStyle"
                onPress={() => handleAddExpiration(item.name)}>
                <Text style={styles.textStyle}>{buttonName}</Text>
              </FButton>
              <View style={styles.itemIconContainer}>
                <Icon name="close-outline" size={20} color="black" />
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default DefaultMenu;

const styles = StyleSheet.create({
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
