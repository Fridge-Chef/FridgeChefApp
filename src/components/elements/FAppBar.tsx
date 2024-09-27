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
      <FButton
        buttonStyle={'noneStyle'}
        fBStyle={{width: 50, alignItems: 'flex-start'}}
        onPress={() => navigation.goBack()}>
        <SvgList type={type} />
      </FButton>
      {titleOn && <FText fStyle="B_18" color={colors.b900} text={title} />}
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
            <View
              style={{
                display: rType1 ? 'flex' : 'none',
                opacity: onlyBackIcon ? 0 : 1,
              }}>
              <FButton
                buttonStyle="noneStyle"
                onPress={onlyBackIcon ? undefined : onPress1}>
                <SvgList type={rType1} />
              </FButton>
            </View>
          )}
          {rType2 && (
            <View
              style={{
                display: rType2 ? 'flex' : 'none',
                opacity: onlyBackIcon ? 0 : 1,
                marginLeft: FWidth * 16,
              }}>
              <FButton
                buttonStyle="noneStyle"
                onPress={onlyBackIcon ? undefined : onPress2}>
                <SvgList type={rType2} />
              </FButton>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default FAppBar;

const styles = StyleSheet.create({
  appBar: {
    height: FWidth * 48,
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
