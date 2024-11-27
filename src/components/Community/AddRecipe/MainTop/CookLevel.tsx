import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import FButton from '../../../elements/FButton';
import FText from '../../../elements/FText';
import {AddRecipeLevelList} from '../../../../utils/list';

type CookLevelProps = {
  level: string;
  onPress: (text: string) => void;
};

const CookLevel = ({level, onPress}: CookLevelProps) => {
  const getInitialLevel = (level: string) => {
    switch (level) {
      case '쉬움':
        return 1;
      case '중간':
        return 2;
      case '어려움':
        return 3;
      default:
        return 1;
    }
  };

  const [selectedLevel, setSelectedLevel] = useState(getInitialLevel(level));
  const handleSelectedLevel = (id: number, text: string) => {
    setSelectedLevel(id);
    onPress(text);
  };

  useEffect(() => {
    setSelectedLevel(getInitialLevel(level));
  }, [level]);
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {AddRecipeLevelList.map(item => (
          <FButton
            key={item.id}
            buttonStyle="noneStyle"
            fBStyle={[
              styles.levelButton,
              {
                borderColor:
                  selectedLevel === item.id ? colors.text : colors.disabled,
                backgroundColor:
                  selectedLevel === item.id ? colors.text : colors.white,
              },
            ]}
            onPress={() => {
              handleSelectedLevel(item.id, item.text);
            }}>
            <FText
              fStyle={selectedLevel === item.id ? 'B_16' : 'M_16'}
              color={selectedLevel === item.id ? colors.white : colors.disabled}
              text={item.text}
            />
          </FButton>
        ))}
      </View>
    </View>
  );
};

export default CookLevel;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 8,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },

  levelButton: {
    flex: 1,
    marginHorizontal: FWidth * 4,
    paddingVertical: FWidth * 9,
    borderWidth: 1,
    borderRadius: 100,
    alignItems: 'center',
  },
});
