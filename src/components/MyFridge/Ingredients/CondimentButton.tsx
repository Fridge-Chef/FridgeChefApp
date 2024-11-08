import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';
import FButton from '../../elements/FButton';

type CondimentButtonProps = {
  onClicked: number;
  setonClicked: (id: number) => void;
};

const CondimentButton = ({onClicked, setonClicked}: CondimentButtonProps) => {
  const buttonName = [
    {id: 1, name: '냉장고 재료'},
    {id: 2, name: '실온보관 재료'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {buttonName.map(item => (
          <FButton
            key={item.id}
            buttonStyle="noneStyle"
            fBStyle={[
              styles.buttonStyle,
              {
                backgroundColor:
                  // onClicked === item.id ? colors.white : colors.background,
                  onClicked === item.id ? colors.white : '#EFF1F3',
                elevation: onClicked === item.id ? 3 : 0,
              },
            ]}
            onPress={() => setonClicked(item.id)}>
            <FText
              fStyle={`${onClicked === item.id ? 'B_16' : 'M_16'}`}
              // color={onClicked === item.id ? colors.text : colors.b400}
              color={onClicked === item.id ? colors.text : '#8C9098'}
              text={item.name}
            />
          </FButton>
        ))}
      </View>
    </View>
  );
};

export default CondimentButton;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 32,
    paddingHorizontal: FWidth * 22,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    // backgroundColor: colors.background,
    backgroundColor: '#EFF1F3',
    paddingVertical: FWidth * 4,
  },

  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: FWidth * 12,
    marginHorizontal: FWidth * 4,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {width: 0, height: 2},
  },
});
