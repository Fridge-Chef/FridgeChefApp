import {StyleSheet, View} from 'react-native';
import React from 'react';
import FButton from './FButton';
import {colors, FWidth} from '../../../globalStyle';
import {useNavigation} from '@react-navigation/native';
import {AppBarProps} from '../../type/types';
import FText from './FText';
import SvgList from './SvgList';

const FAppBar = ({
  type,
  borderBottomWidth,
  titleOn = false,
  title,
  rightOn = false,
  onlyBackIcon = false,
  rType1,
  rType2,
  rightTitleOn = false,
  rightTitle,
  onPress1,
  onPress2,
  textOnPress,
}: AppBarProps) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.appBar, {borderBottomWidth: borderBottomWidth}]}>
      <View style={styles.rightIconContainer}>
        <FButton
          buttonStyle={'noneStyle'}
          fBStyle={{
            justifyContent: 'center',
            width: onlyBackIcon || rType1 === undefined ? 50 : null,
            marginRight: rType1 && rType2 ? FWidth * 16 : null,
          }}
          onPress={() => navigation.goBack()}>
          <SvgList type={type} />
        </FButton>
        <FButton
          buttonStyle={'noneStyle'}
          fBStyle={{
            display: rType1 && rType2 ? 'flex' : 'none',
            opacity: 0,
          }}>
          <SvgList type={type} />
        </FButton>
      </View>
      {titleOn && <FText fStyle="B_16" color={colors.b900} text={title} />}
      {rightOn && rightTitleOn ? (
        <FButton
          buttonStyle="noneStyle"
          fBStyle={{width: 50, alignItems: 'flex-end'}}
          onPress={textOnPress}>
          <FText fStyle="B_16" color={colors.disabled} text={rightTitle} />
        </FButton>
      ) : (
        <View
          style={[
            styles.rightIconContainer,
            {display: rightOn ? 'flex' : 'none'},
          ]}>
          {rType1 && (
            <FButton
              buttonStyle="noneStyle"
              fBStyle={{
                display: rType1 ? 'flex' : 'none',
                opacity: onlyBackIcon ? 0 : 1,
                width: !rType2 ? 50 : null,
              }}
              onPress={onlyBackIcon ? undefined : onPress1}>
              <SvgList type={rType1} />
            </FButton>
          )}
          {rType2 && (
            <FButton
              buttonStyle="noneStyle"
              fBStyle={{
                display: rType2 ? 'flex' : 'none',
                opacity: onlyBackIcon ? 0 : 1,
                marginLeft: rType1 !== undefined ? FWidth * 16 : null,
                width: rType1 === undefined ? 50 : null,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={onlyBackIcon ? undefined : onPress2}>
              <SvgList type={rType2} />
            </FButton>
          )}
        </View>
      )}
    </View>
  );
};

export default FAppBar;

const styles = StyleSheet.create({
  appBar: {
    paddingVertical: FWidth * 14,
    flexDirection: 'row',
    paddingHorizontal: FWidth * 22,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.b200,
  },

  rightIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
