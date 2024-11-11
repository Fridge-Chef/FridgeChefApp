import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import FButton from '../../../elements/FButton';
import FText from '../../../elements/FText';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DetailReviewEdit from '../../../../utils/Svg/DetailReviewEdit';
import SubTitle2 from '../../../elements/SubTitle/SubTitle2';
import {useGetRecipeDetailReview} from '../../../../api/recipeQuery';
import Loading from '../../../elements/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TitleComponentProps = {
  title: string;
  boardId: number;
};

const TitleComponent = ({title, boardId}: TitleComponentProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {data, isLoading} = useGetRecipeDetailReview(boardId);
  const [isCheck, setIsCheck] = useState(false);

  const userCheck = async () => {
    if (!data) return;
    const userName = await AsyncStorage.getItem('nickname');
    const userCheck =
      data!.content.map(item => item.userName).filter(item => item === userName)
        .length > 0;
    console.log(userName);
    console.log(userCheck);
    if (userCheck) {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  };

  useEffect(() => {
    userCheck();
  }, [data]);
  if (isLoading)
    return <Loading loadingTitle="로딩중" backColor={colors.white} />;

  return (
    <View style={styles.container}>
      <SubTitle2 title="레시피 후기" />
      {!isCheck && (
        <FButton
          buttonStyle="noneStyle"
          onPress={() =>
            navigation.navigate('addRecipeReview', {title, boardId})
          }>
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
