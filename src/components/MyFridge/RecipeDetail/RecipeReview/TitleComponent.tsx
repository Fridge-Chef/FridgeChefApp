import AsyncStorage from '@react-native-async-storage/async-storage';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import {RecipeReviewListType} from '../../../../type/types';
import DetailReviewEdit from '../../../../utils/Svg/DetailReviewEdit';
import FButton from '../../../elements/FButton';
import FText from '../../../elements/FText';
import LoginModal from '../../../elements/Modals/LoginModal';
import SubTitle2 from '../../../elements/SubTitle/SubTitle2';

type TitleComponentProps = {
  title: string;
  data: RecipeReviewListType | undefined;
  boardId: number;
};

const TitleComponent = ({title, boardId, data}: TitleComponentProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [isCheck, setIsCheck] = useState(false);
  const [loginCheck, setLoginCheck] = useState(false);

  const userCheck = async () => {
    if (!data) return;
    const userCheck = data.content.map(item => item.myMe);
    if (userCheck.length === 0 || !userCheck.includes(true)) {
      console.log('후기 작성 가능');
      setIsCheck(true);
    } else {
      console.log('후기 작성 불가능');
      setIsCheck(false);
    }
  };

  useEffect(() => {
    userCheck();
  }, [data]);

  return (
    <View style={styles.container}>
      <SubTitle2 title="레시피 후기" />
      {isCheck && (
        <FButton
          buttonStyle="noneStyle"
          onPress={async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
              navigation.navigate('addRecipeReview', {title, boardId});
            } else {
              setLoginCheck(true);
            }
          }}>
          <View style={styles.buttonContainer}>
            <DetailReviewEdit />
            <FText
              mLeft={FWidth * 4}
              fStyle="M_14"
              color={colors.black}
              text="후기 작성"
            />
          </View>
        </FButton>
      )}
      <LoginModal
        loginCheck={loginCheck}
        onPress={() => {
          navigation.navigate('serviceLogin');
          setLoginCheck(false);
        }}
        cancelOnPress={() => setLoginCheck(false)}
      />
    </View>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: FWidth * 12,
    paddingVertical: FWidth * 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 40,
  },
});
