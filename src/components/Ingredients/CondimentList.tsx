import {LayoutChangeEvent, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FHeight, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import {ingredients} from '../../utils/list';
import SubTitleComponent from './SubTitleComponent';
import {useBottomSheetRef, useBottomSheetTitle} from '../../store/store';
import MoreButtonComponent from './MoreButtonComponent';
import FText from '../elements/FText';
import Plus2 from '../../utils/Svg/Plus2';

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
      <SubTitleComponent title={'보유 조미료'} color={colors.b400} />
      <View
        style={[
          styles.listContainer,
          {maxHeight: containerOpen ? null : buttonHeight},
        ]}>
        <View style={[styles.listContainerMargin]} onLayout={onLayoutContent}>
          {ingredients.map(item => (
            <FButton
              onLayout={onLayout}
              key={item.id}
              buttonStyle="iconButton"
              marginTop={FHeight * 12}
              marginRight={FWidth * 6}
              borderWidth={0}
              buttonColor={colors.background}
              radius={50}>
              <FText fStyle="B_14" color={colors.text} text={item.name} />
            </FButton>
          ))}
        </View>
        {contentHeight > buttonHeight * 2 + FHeight * 12 && (
          <MoreButtonComponent
            buttonHeight={buttonHeight}
            containerOpen={containerOpen}
            onPress={() => setContainerOpen(!containerOpen)}
          />
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
          <Plus2 />
          <FText
            mLeft={FWidth * 4}
            fStyle="M_14"
            color={colors.text}
            text={buttonName}
          />
        </View>
      </FButton>
    </View>
  );
};

export default CondimentList;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 32,
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
});
