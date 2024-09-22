import {
  FlatList,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FHeight, fontStyles, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {ingredients} from '../../utils/list';
import SubTitleComponent from './SubTitleComponent';
import SvgImage from '../elements/SvgImage';

const CondimentList = () => {
  const [buttonHeight, setButtonHeight] = useState<number | null>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerOpen, setContainerOpen] = useState(false);
  const onLayout = (e: LayoutChangeEvent) => {
    setContainerHeight(e.nativeEvent.layout.height);
    console.log(e.nativeEvent.layout.height);
  };

  const onLayout2 = (e: LayoutChangeEvent) => {
    if (buttonHeight === null) {
      setButtonHeight(e.nativeEvent.layout.height);
      console.log('이건 버튼 크기', e.nativeEvent.layout.height);
    }
  };
  console.log('버튼 높이', containerOpen);
  return (
    <View style={styles.container}>
      <SubTitleComponent title={'기본 조미료'} />
      <View
        style={[
          styles.listContainer,
          {
            overflow: 'hidden',
            height: containerOpen ? buttonHeight! + 12 : buttonHeight! * 2 + 12,
          },
        ]}
        onLayout={onLayout}>
        <>
          {ingredients.map(item => (
            <FButton
              onLayout={onLayout2}
              key={item.id}
              title={item.name}
              style={fontStyles.B_14}
              titleColor="black"
              buttonStyle="iconButton"
              borderWidth={0}
              buttonColor="gray"
              radius={50}
            />
          ))}
          {buttonHeight! * 2 + 12 && (
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: buttonHeight,
                height: buttonHeight,
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
            width={16}
            height={16}
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
