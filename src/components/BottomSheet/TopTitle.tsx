import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../elements/FButton';
import {useAddModalInputText, useBottomSheetRef} from '../../store/store';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, fontFamilies, fontStyles, FWidth} from '../../../globalStyle';
import SvgImage from '../elements/SvgImage';

type TopTitleProps = {
  title: string;
};

const TopTitle = ({title}: TopTitleProps) => {
  const {bottomSheetRef} = useBottomSheetRef();
  const {setAddTitle} = useAddModalInputText();
  const handleClose = () => {
    setAddTitle('');
    bottomSheetRef.current?.close();
  };

  return (
    <View style={styles.titleContainer}>
      <Text style={[fontStyles.B_18, {color: colors.text}]}>{title}</Text>
      <FButton buttonStyle="noneStyle" onPress={handleClose}>
        <SvgImage type="close2" width={24} height={24} />
      </FButton>
    </View>
  );
};

export default TopTitle;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titleText: {
    color: 'black',
    fontFamily: fontFamilies.pretendardBold,
    fontSize: 18,
  },
});
