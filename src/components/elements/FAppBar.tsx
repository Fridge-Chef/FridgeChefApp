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
  rightTextColor = colors.disabled,
  onlyBackIcon = false,
  rType1,
  rType2,
  rType3,
  rightTitleOn = false,
  rightTitle,
  onBackPress,
  onPress1,
  onPress2,
  onPress3,
  shadow = false,
  elevation,
  textOnPress,
}: AppBarProps) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    }
    navigation.goBack();
  };

  return (
    <View
      style={[
        styles.appBar,
        {
          borderBottomWidth: borderBottomWidth,
          elevation: shadow ? elevation : 0,
        },
      ]}>
      <View style={styles.rightIconContainer}>
        <FButton
          buttonStyle={'noneStyle'}
          fBStyle={{
            justifyContent: 'center',
            marginRight: rType1 && rType2 ? FWidth * 16 : null,
          }}
          onPress={handleBackPress}>
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
      {titleOn && <FText fStyle="B_18" color={colors.text} text={title} />}
      {rightOn && rightTitleOn ? (
        <FButton buttonStyle="noneStyle" onPress={textOnPress}>
          <FText fStyle="B_16" color={rightTextColor} text={rightTitle} />
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
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={onlyBackIcon ? undefined : onPress2}>
              <SvgList type={rType2} />
            </FButton>
          )}
          {rType3 && (
            <FButton
              buttonStyle="noneStyle"
              fBStyle={{
                display: rType3 ? 'flex' : 'none',
                opacity: onlyBackIcon ? 0 : 1,
                marginLeft: rType2 !== undefined ? FWidth * 16 : null,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={onlyBackIcon ? undefined : onPress3}>
              <SvgList type={rType3} />
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
    paddingVertical: FWidth * 12,
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
