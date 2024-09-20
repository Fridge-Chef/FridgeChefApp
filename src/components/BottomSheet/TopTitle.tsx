import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../elements/FButton';
import {useBottomSheetRef} from '../../store/store';
import Icon from 'react-native-vector-icons/Ionicons';
import {fontFamilies, FWidth} from '../../../globalStyle';

type TopTitleProps = {
  title: string;
};

const TopTitle = ({title}: TopTitleProps) => {
  const {bottomSheetRef} = useBottomSheetRef();
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <FButton
        buttonStyle="noneStyle"
        onPress={() => bottomSheetRef.current?.close()}>
        <View style={styles.iconContainer}>
          <Icon name="close-outline" size={24} color="black" />
        </View>
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

  iconContainer: {
    width: FWidth * 22,
    height: FWidth * 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
