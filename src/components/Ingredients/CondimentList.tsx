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
import {colors, FHeight, fontStyles, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import {ingredients} from '../../utils/list';
import SubTitleComponent from './SubTitleComponent';
import SvgImage from '../elements/SvgImage';
import {useBottomSheetRef, useBottomSheetTitle} from '../../store/store';

const CondimentList = () => {
  const [buttonHeight, setButtonHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [containerOpen, setContainerOpen] = useState(false);
  const {bottomSheetRef} = useBottomSheetRef();
  const [buttonName] = useState('조미료 추가');
  const {setTitle} = useBottomSheetTitle();

  const onLayout = (e: LayoutChangeEvent) => {
    if (buttonHeight === 0) {
      setButtonHeight(e.nativeEvent.layout.height);
    }
  };

  const onLayoutContent = (e: LayoutChangeEvent) => {
    setContentHeight(e.nativeEvent.layout.height);
  };

  useEffect(() => {
    if (ingredients.length > 0) {
    }
  }, [contentHeight]);

  const handleAddCondiment = () => {
    setTitle(buttonName);
    bottomSheetRef.current?.expand();
  };

  return (
    <View style={styles.container}>
      <SubTitleComponent title={'기본 조미료'} />
      <View
        style={[
          styles.listContainer,
          {maxHeight: containerOpen ? null : buttonHeight * 2 + FHeight * 12},
        ]}>
        <View style={[styles.listContainerMargin]} onLayout={onLayoutContent}>
          {ingredients.map(item => (
            <FButton
              onLayout={onLayout}
              key={item.id}
              title={item.name}
              style={fontStyles.B_14}
              titleColor={colors.text}
              buttonStyle="iconButton"
              marginTop={FHeight * 12}
              borderWidth={0}
              buttonColor={colors.background}
              radius={50}
            />
          ))}
        </View>
        {contentHeight > buttonHeight * 3 + FHeight * 12 && (
          <FButton
            buttonStyle="smallIcon"
            fStyle={styles.downButton}
            onPress={() => setContainerOpen(!containerOpen)}>
            <SvgImage
              type="arrowDown"
              width={FWidth * 28}
              height={FWidth * 28}
              rotation={containerOpen ? 180 : 0}
            />
          </FButton>
        )}
      </View>
      <FButton
        buttonStyle="iconButton2"
        buttonColor={colors.white}
        marginTop={FHeight * 16}
        borderWidth={1}
        radius={50}
        onPress={handleAddCondiment}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <SvgImage type="smallPlus" width={15} height={15} />
          <Text style={[fontStyles.M_14, styles.textStyle]}>{buttonName}</Text>
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
    marginTop: FHeight * 12,
    overflow: 'hidden',
  },

  listContainerMargin: {
    flexDirection: 'row',
    marginTop: FHeight * -12,
    flexWrap: 'wrap',
  },

  downButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.background,
  },

  textStyle: {
    color: colors.text,
    marginLeft: FWidth * 4,
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
