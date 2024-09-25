import {LayoutChangeEvent, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import {ingredients} from '../../utils/list';
import SubTitleComponent from './SubTitleComponent';
import SvgImage from '../elements/SvgImage';
import {useBottomSheetRef, useBottomSheetTitle} from '../../store/store';
import MoreList from '../../utils/Svg/MoreList';

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
      <SubTitleComponent title={'기본 조미료'} color={colors.b400} />
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
              buttonStyle="iconButton"
              marginTop={FHeight * 12}
              borderWidth={0}
              buttonColor={colors.background}
              radius={50}>
              <Text style={[fontStyles.B_14, styles.textColor]}>
                {item.name}
              </Text>
            </FButton>
          ))}
        </View>
        {contentHeight > buttonHeight * 3 + FHeight * 12 && (
          <FButton
            buttonStyle="smallIcon"
            onPress={() => setContainerOpen(!containerOpen)}>
            <View
              style={{
                transform: [{rotate: containerOpen ? '180deg' : '0deg'}],
              }}>
              <MoreList buttonHeight={buttonHeight} />
            </View>
          </FButton>
        )}
      </View>
      <FButton
        buttonStyle="iconButton2"
        buttonColor={colors.white}
        marginTop={FWidth * 16}
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
    marginTop: FWidth * 40,
    paddingHorizontal: FWidth * 22,
  },

  listContainer: {
    position: 'relative',
    marginTop: FWidth * 12,
    overflow: 'hidden',
  },

  listContainerMargin: {
    flexDirection: 'row',
    marginTop: FWidth * -12,
    flexWrap: 'wrap',
  },

  downButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.background,
  },

  textColor: {
    color: colors.text,
  },

  textStyle: {
    color: colors.text,
    marginLeft: FWidth * 4,
  },
});
