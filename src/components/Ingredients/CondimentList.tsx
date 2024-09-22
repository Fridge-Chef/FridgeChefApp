import {
  FlatList,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FHeight, fontStyles, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import {ingredients} from '../../utils/list';
import SubTitleComponent from './SubTitleComponent';
import SvgImage from '../elements/SvgImage';

const CondimentList = () => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerOpen, setContainerOpen] = useState(false);
  const onLayout = (e: LayoutChangeEvent) => {
    setContainerHeight(e.nativeEvent.layout.height);
  };

  useEffect(() => {
    if (ingredients.length > 0) {
      onLayout;
    }
  }, [ingredients.length]);

  console.log('높이', containerHeight > FHeight * 81.6);
  return (
    <View style={styles.container}>
      <SubTitleComponent title={'기본 조미료'} />
      <View
        style={[
          styles.listContainer,
          {maxHeight: containerOpen ? null : FHeight * 84.6},
        ]}
        onLayout={onLayout}>
        <>
          {ingredients.map((item, index) => {
            const lastItem = index >= ingredients.length - 3;
            return (
              <FButton
                key={item.id}
                title={item.name}
                style={fontStyles.B_14}
                titleColor="black"
                buttonStyle="iconButton"
                marginBottom={lastItem ? 0 : FHeight * 12}
                borderWidth={0}
                buttonColor="gray"
                radius={50}
              />
            );
          })}
          {containerHeight > FHeight * 81.6 && (
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 50,
                height: 50,
                borderRadius: 50,
                borderWidth: 1,
              }}
              onPress={() =>
                setContainerOpen(!containerOpen)
              }></TouchableOpacity>
          )}
        </>
      </View>
      <FButton
        buttonStyle="iconButton2"
        buttonColor="white"
        borderWidth={1}
        radius={50}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'black',
          }}>
          <SvgImage
            type="plus"
            width={15}
            height={15}
            fill="#000000"
            stroke="#000000"
          />
          <Text style={{marginLeft: FWidth * 4, color: '#545559'}}>
            조미료 추가
          </Text>
        </View>
      </FButton>
    </View>
  );
};

export default CondimentList;

const styles = StyleSheet.create({
  container: {
    marginTop: FHeight * 40,
  },

  listContainer: {
    position: 'relative',
    flexDirection: 'row',
    marginTop: FHeight * 12,
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'red',
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
