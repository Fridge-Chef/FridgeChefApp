import {StyleSheet, View} from 'react-native';
import React, {Children} from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';
import Num from '../../../utils/Svg/Num';
import FImage from '../../elements/FImage';

type ContentComponentProps = {
  title: string;
  content: string;
  img: string;
  children: React.ReactNode;
};

const ContentComponent = ({
  title,
  content,
  img,
  children,
}: ContentComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconAlign}>
        {children}
        <FText
          mLeft={FWidth * 8}
          fStyle="B_16"
          color={colors.text}
          text={title}
        />
      </View>
      <FText
        flexShrink={1}
        fStyle="R_16"
        lineH={FWidth * 24}
        color={colors.black}
        text={content}
      />
      <View style={{marginTop: FWidth * 8}}>
        <FImage
          uri={img}
          imgStyle="detailSub"
          resizeMode="stretch"
          alt="디테일 이미지"
        />
      </View>
    </View>
  );
};

export default ContentComponent;

const styles = StyleSheet.create({
  container: {
    marginBottom: FWidth * 32,
  },

  iconAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: FWidth * 8,
  },
});
