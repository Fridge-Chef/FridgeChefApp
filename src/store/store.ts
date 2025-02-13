import {create} from 'zustand';
import {ListData, ReviewType} from '../type/types';

type IngredientTitleTitleType = {
  ingredientTitle: string;
  setIngredientTitle: (title: string) => void;
};

type AddTitleType = {
  addTitle: string;
  setAddTitle: (addTitle: string) => void;
};

type TopTabBarType = {
  index: number;
  setIndex: (index: number) => void;
};

type CategoriesTextType = {
  category: string;
  expiryDate: string;
  itemNumber: number;
  setItemNumber: (itemNumber: number) => void;
  setCategory: (category: string) => void;
  setExpiryDate: (expiryDate: string) => void;
};

type UserDetailType = {
  userDetail: ReviewType;
  setUserDetail: (userDetail: Partial<ReviewType>) => void;
};

type UserReviewType = {
  userReview: ReviewType;
  setUserReview: (userReview: Partial<ReviewType>) => void;
};

type AddRecipeCategoriesType = {
  addTitle: {foodStyle: string; foodType: string};
  setAddTitle: (addTitle: {foodStyle: string; foodType: string}) => void;
};

type SelectedCategoryType = {
  selectedCategory: string;
  setSelectedCategory: (selectedCategory: string) => void;
};

type ReviewTitleType = {
  reviewTitle: string;
  setReviewTitle: (reviewTitle: string) => void;
};

type IngredientListType = {
  ingredientList: ListData[];
  setIngredientList: (ingredientList: ListData[]) => void;
};

type AddCheckType = {
  check: boolean;
  setCheck: (check: boolean) => void;
};

type UsernameCheckType = {
  usernameCheck: string;
  setUsernameCheck: (usernameCheck: string) => void;
};

type RecipeIdType = {
  recipeId: number;
  setRecipeId: (recipeId: number) => void;
};

type MyIngredientsCheckedType = {
  myIngredientsChecked: boolean;
  setMyIngredientsChecked: (myIngredientsChecked: boolean) => void;
};

export const useIngredientTitle = create<IngredientTitleTitleType>(set => ({
  ingredientTitle: '',
  setIngredientTitle: (ingredientTitle: string) => set({ingredientTitle}),
}));

export const useAddModalInputText = create<AddTitleType>(set => ({
  addTitle: '',
  setAddTitle: (addTitle: string) => set({addTitle}),
}));

export const useTopTabBar = create<TopTabBarType>(set => ({
  index: 0,
  setIndex: (index: number) => set({index}),
}));

export const useCommunityTopTabBar = create<TopTabBarType>(set => ({
  index: 0,
  setIndex: (index: number) => set({index}),
}));

export const useCategoriesText = create<CategoriesTextType>(set => ({
  category: '',
  expiryDate: '날짜를 선택해 주세요',
  itemNumber: 0,
  setItemNumber: (itemNumber: number) => set({itemNumber}),
  setCategory: (category: string) => set({category}),
  setExpiryDate: (expiryDate: string) => set({expiryDate}),
}));

export const useUserDetail = create<UserDetailType>(set => ({
  userDetail: {
    type: '',
    prevImages: [],
    commentId: 0,
    boardId: 0,
    title: '',
    myMe: false,
    star: 0,
    comment: '',
    images: [],
    imagesFile: [],
  },
  setUserDetail: (userDetail: Partial<ReviewType>) =>
    set(state => ({
      userDetail: {
        ...state.userDetail,
        ...userDetail,
      },
    })),
}));

export const useUserReview = create<UserReviewType>(set => ({
  userReview: {
    type: '',
    prevImages: [],
    commentId: 0,
    boardId: 0,
    title: '',
    myMe: false,
    star: 0,
    comment: '',
    images: [],
    imagesFile: [],
  },
  setUserReview: (userReview: Partial<ReviewType>) =>
    set(state => ({
      userReview: {
        ...state.userReview,
        ...userReview,
      },
    })),
}));

export const useAddRecipeCategories = create<AddRecipeCategoriesType>(set => ({
  addTitle: {
    foodStyle: '한식',
    foodType: '',
  },
  setAddTitle: (addTitle: {foodStyle: string; foodType: string}) =>
    set({addTitle}),
}));

export const useSelectedCategory = create<SelectedCategoryType>(set => ({
  selectedCategory: '',
  setSelectedCategory: (selectedCategory: string) => set({selectedCategory}),
}));

export const useRecipeReviewTitle = create<ReviewTitleType>(set => ({
  reviewTitle: '',
  setReviewTitle: (reviewTitle: string) => set({reviewTitle}),
}));

export const useIngredientList = create<IngredientListType>(set => ({
  ingredientList: [],
  setIngredientList: (ingredientList: ListData[]) => set({ingredientList}),
}));

export const useAddCheck = create<AddCheckType>(set => ({
  check: false,
  setCheck: (check: boolean) => set({check}),
}));

export const useUsernameCheck = create<UsernameCheckType>(set => ({
  usernameCheck: '',
  setUsernameCheck: (usernameCheck: string) => set({usernameCheck}),
}));

export const useRecipeId = create<RecipeIdType>(set => ({
  recipeId: null!,
  setRecipeId: (recipeId: number) => set({recipeId}),
}));

export const useMyIngredientsChecked = create<MyIngredientsCheckedType>(
  set => ({
    myIngredientsChecked: false,
    setMyIngredientsChecked: (myIngredientsChecked: boolean) =>
      set({myIngredientsChecked}),
  }),
);
