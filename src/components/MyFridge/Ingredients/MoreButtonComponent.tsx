import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../../elements/FButton';
import MoreList from '../../../utils/Svg/MoreList';

type MoreButtonComponentProps = {
  onPress: () => void;
  buttonHeight: number;
  containerOpen: boolean;
};

const MoreButtonComponent = ({
  onPress,
  buttonHeight,
  containerOpen,
}: MoreButtonComponentProps) => {
  return (
    <FButton buttonStyle="smallIcon" onPress={onPress}>
      <View
        style={{
          transform: [{rotate: containerOpen ? '180deg' : '0deg'}],
        }}>
        <MoreList buttonHeight={buttonHeight} />
      </View>
    </FButton>
  );
};

export default MoreButtonComponent;

const styles = StyleSheet.create({});
