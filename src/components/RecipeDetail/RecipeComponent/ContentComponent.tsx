import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';

type ContentComponentProps = {
  content: string;
};

const ContentComponent = ({content}: ContentComponentProps) => {
  return (
    <View style={styles.container}>
      <FText
        flexShrink={1}
        fStyle="R_16"
        lineH={FWidth * 24}
        color={colors.black}
        text={content}
      />
    </View>
  );
};

export default ContentComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 16,
  },
});
