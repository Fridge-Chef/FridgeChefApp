import {create} from 'zustand';
import {ListData} from '../type/types';

type ReviewType = {
  type?: string | undefined;
  prevImages?: string[];
  commentId?: number | undefined;
  boardId: number;
  star: number;
  comment: string;
  images?: string[];
  imagesFile?:
    | {
        name: string;
        type: string;
        uri: string;
      }[]
    | undefined;
};

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

export const useUserReview = create<UserReviewType>(set => ({
  userReview: {
    type: '',
    prevImages: [],
    commentId: 0,
    boardId: 0,
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
