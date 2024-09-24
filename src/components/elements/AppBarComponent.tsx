import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from './FButton';
import SvgImage from './SvgImage';
import {colors, FHeight, fontStyles, FWidth} from '../../../globalStyle';
import {useNavigation} from '@react-navigation/native';
import {AppBarProps} from '../../type/types';

const AppBarComponent = ({
  borderBottomWidth,
  leftIcon,
  leftIconWidth,
  leftIconHeight,
  titleOn = false,
  title,
  rightOn = false,
  onlyBackIcon = false,
  rightIcon1,
  rightIconWidth1,
  rightIconHeight1,
  rightIcon2,
  rightIconWidth2,
  rightIconHeight2,
  rightTitleOn = false,
  rightTitle,
  onPress1,
  onPress2,
}: AppBarProps) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.appBar, {borderBottomWidth: borderBottomWidth}]}>
      <FButton buttonStyle={'noneStyle'} onPress={() => navigation.goBack()}>
        <SvgImage
          type={leftIcon.icon}
          width={leftIconWidth}
          height={leftIconHeight}
          fill={colors.white}
        />
      </FButton>
      {titleOn && (
        <Text style={[fontStyles.B_18, {color: colors.b900}]}>{title}</Text>
      )}
      {rightOn && rightTitleOn ? (
        <View style={{display: rightOn ? 'flex' : 'none'}}>
          <Text>{rightTitle}</Text>
        </View>
      ) : (
        <View
          style={[
            styles.rightIconContainer,
            {display: rightOn ? 'flex' : 'none'},
          ]}>
          {rightIcon1 && (
            <View
              style={{
                display: rightIcon1 ? 'flex' : 'none',
                opacity: onlyBackIcon ? 0 : 1,
              }}>
              <FButton
                buttonStyle="noneStyle"
                onPress={onlyBackIcon ? undefined : onPress1}>
                <SvgImage
                  type={rightIcon1.icon}
                  width={rightIconWidth1}
                  height={rightIconHeight1}
                  fill={colors.white}
                />
              </FButton>
            </View>
          )}
          {rightIcon2 && (
            <View
              style={{
                display: rightIcon2 ? 'flex' : 'none',
                opacity: onlyBackIcon ? 0 : 1,
                marginLeft: FWidth * 16,
              }}>
              <FButton
                buttonStyle="noneStyle"
                onPress={onlyBackIcon ? undefined : onPress2}>
                <SvgImage
                  type={rightIcon2!.icon}
                  width={rightIconWidth2}
                  height={rightIconHeight2}
                  fill={colors.white}
                />
              </FButton>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default AppBarComponent;

const styles = StyleSheet.create({
  appBar: {
    height: FHeight * 48,
    flexDirection: 'row',
    paddingHorizontal: FWidth * 21,
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
