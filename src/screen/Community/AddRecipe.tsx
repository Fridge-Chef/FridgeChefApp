import {Keyboard, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../../globalStyle';
import MainTop from '../../components/Community/AddRecipe/MainTop/MainTop';
import AddIngredient from '../../components/Community/AddRecipe/AddIngredient/AddIngredient';
import {AddIngredientType} from '../../type/types';
import RecipeSteps from '../../components/Community/AddRecipe/RecipeSteps/RecipeSteps';
import Submit from '../../components/Community/AddRecipe/Submit/Submit';
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSelectedCategory} from '../../store/store';
import {
  handleButtonColor,
  handlePreview,
  handlePreviewButtonColor,
  handleSubmit,
} from '../../service/Community/AddRecipe';
import {
  useAddRecipe,
  useGetRecipeDetail,
  useGetRecipeList,
} from '../../api/recipeQuery';
import {
  useGetRecipeBookList,
  useUpdateMyRecipe,
} from '../../api/recipeBookQuery';
import FModal from '../../components/elements/FModal';

type AddRecipeProps = {
  params: {
    boardId: number;
    type: string;
  };
};

const AddRecipe = () => {
  const params = useRoute<RouteProp<AddRecipeProps>>();
  const itemId = params.params;
  const {
    data,
    isLoading: detailLoading,
    refetch: recipeDetailRefetch,
  } = useGetRecipeDetail(itemId?.boardId);

  const [modalOpen, setModalOpen] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {selectedCategory, setSelectedCategory} = useSelectedCategory();
  const [isLoading, setIsLoading] = useState(false);
  const {refetch: myRecipe} = useGetRecipeBookList('MYRECIPE');
  const {mutate: updateMutate} = useUpdateMyRecipe();
  const {refetch} = useGetRecipeList();
  const {mutate} = useAddRecipe();
  const [addRecipeData, setAddRecipeData] = useState<AddIngredientType>({
    mainImage: '',
    mainImageFile: {
      name: '',
      type: '',
      uri: '',
    },
    name: '',
    description: '',
    dishCategory: selectedCategory,
    dishTime: '',
    dishLevel: '쉬움',
    recipeIngredients: [{name: '', details: ''}],
    instructions: [
      {
        content: '',
        imageLink: '',
        imageFile: {
          name: '',
          type: '',
          uri: '',
        },
      },
    ],
  });

  useEffect(() => {
    setAddRecipeData(prevData => ({
      ...prevData,
      dishCategory: selectedCategory,
    }));
  }, [selectedCategory]);

  useEffect(() => {
    if (itemId) {
      if (detailLoading) return;
      setSelectedCategory(data?.dishCategory!);
      setAddRecipeData({
        id: data?.boardId,
        mainImage: data?.mainImage!,
        mainImagePreview: data?.mainImage!,
        mainImageFile: {
          name: '',
          type: '',
          uri: '',
        },
        name: data?.title!,
        description: data?.description!,
        dishCategory: selectedCategory,
        dishTime: data?.dishTime!.split('분')[0]!,
        dishLevel: data?.dishLevel!,
        recipeIngredients: data!.recipeIngredients.map(ingredient => ({
          name: ingredient.name,
          details: ingredient.details,
        })),
        instructions: data!.instructions.map(instruction => ({
          content: instruction.content,
          imageLink: instruction.imageLink,
          imagePreview: instruction.imageLink,
          imageFile: {
            name: '',
            type: '',
            uri: '',
          },
        })),
      });
    }
  }, [data]);

  return (
    <View style={styles.buttonContainer}>
      <ScrollView overScrollMode="never">
        <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
          <MainTop
            addRecipeData={addRecipeData}
            setAddRecipeData={setAddRecipeData}
            selectedCategory={selectedCategory}
          />
          <AddIngredient
            addRecipeData={addRecipeData}
            setAddRecipeData={setAddRecipeData}
          />
          <RecipeSteps
            addRecipeData={addRecipeData}
            setAddRecipeData={setAddRecipeData}
          />
        </Pressable>
      </ScrollView>
      <Submit
        backgroundColor={handleButtonColor(addRecipeData)}
        previewBackGroundColor={handlePreviewButtonColor(addRecipeData)}
        previewOnPress={() => handlePreview(addRecipeData, navigation)}
        submitOnPress={() => {
          if (itemId?.type === 'update') {
            updateMutate(addRecipeData, {
              onSuccess: () => {
                setModalOpen(true);
              },
            });
          } else {
            handleSubmit(
              addRecipeData,
              setIsLoading,
              mutate,
              refetch,
              myRecipe,
              navigation,
            );
          }
        }}
      />
      {modalOpen && (
        <FModal
          modalVisible={modalOpen}
          buttonText="확인"
          text="수정이 완료되었습니다."
          onPress={() => {
            myRecipe();
            recipeDetailRefetch();
            navigation.goBack();
          }}
        />
      )}
      {/* {isLoading && <Loading loadingTitle="레시피 등록중" />} */}
    </View>
  );
};

export default AddRecipe;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background2,
  },
});
