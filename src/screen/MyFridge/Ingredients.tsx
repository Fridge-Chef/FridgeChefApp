import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../globalStyle';
import TopComponent from '../../components/Ingredients/TopComponent';
import AddList from '../../components/Ingredients/AddList/AddList';
import FButton from '../../components/elements/FButton';
import {useLoading} from '../../store/store';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LoginAndUser from '../../components/Ingredients/LoginAndUser';
import FText from '../../components/elements/FText';
import {showToast} from '../../helpers/ShowToast';
import CondimentButton from '../../components/Ingredients/CondimentButton';
import InfoComponent from '../../components/Ingredients/InfoComponent';
import FModal from '../../components/elements/FModal';
const Ingredients = () => {
  const {setLoading, setLoadingTitle} = useLoading();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [onClicked, setonClicked] = useState(1);
  // const [test] = useState(false);
  const [test] = useState(true);
  const [modal, setModal] = useState(false);
  const handleSearch = () => {
    setLoadingTitle('레시피 검색중');
    setLoading(true);
    if (setLoading) {
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('recRecipe');
      }, 1000);
    } else {
    }
  };

  // 테스트용 함수
  const handleTest = () => {
    setModal(!modal);
    showToast({
      text: '기본 재료를 등록했어요. 언제든 삭제할 수 있어요!',
      time: 5000,
    });
  };

  // useEffect(() => {
  //   handleTest()
  // }, [])

  return (
    <View style={styles.container}>
      <FModal
        modalVisible={modal}
        setVisible={setModal}
        text="반갑습니다"
        text2="반갑습니다"
        buttonText="좋아요"
        cancel
      />
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        <LoginAndUser test={test} />
        {/* 테스트 터쳐블 삭제바람 */}
        {test && (
          <>
            <TouchableOpacity onPress={handleTest}>
              <TopComponent />
            </TouchableOpacity>
            {/* <CondimentList /> */}
            <CondimentButton
              onClicked={onClicked}
              setonClicked={setonClicked}
            />
            <InfoComponent />
          </>
        )}
        <AddList onClicked={onClicked} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <FButton
          buttonStyle="bigButton"
          buttonColor={colors.primary[1]}
          onPress={handleSearch}>
          <FText
            fStyle="B_18"
            color={colors.white}
            text="이 재료로 레시피 검색"
          />
        </FButton>
      </View>
    </View>
  );
};

export default Ingredients;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  buttonContainer: {
    // paddingHorizontal: FWidth * 22,
    // marginBottom: FHeight * 38,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});
