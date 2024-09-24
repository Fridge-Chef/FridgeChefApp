import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FHeight, fontStyles} from '../../../../globalStyle';

type ContentComponentProps = {
  content: string;
};

const ContentComponent = ({content}: ContentComponentProps) => {
  return (
    <View style={styles.container}>
      <Text style={[fontStyles.R_16, styles.textColor]}>{content}</Text>
    </View>
  );
};

export default ContentComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FHeight * 16,
  },

  textColor: {
    color: colors.black,
  },
});
