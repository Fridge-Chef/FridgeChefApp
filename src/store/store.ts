import BottomSheet, {BottomSheetModal} from '@gorhom/bottom-sheet';
import {RefObject} from 'react';
import {create} from 'zustand';
import {ListData} from '../type/types';

type BottomSheetRefType = {
  bottomSheetRef: RefObject<BottomSheetModal>;
  setBottomSheetRef: (ref: RefObject<BottomSheetModal>) => void;
};

type SubBottomSheetRefType = {
  subBottomSheetRef: RefObject<BottomSheetModal>;
  setSubBottomSheetRef: (ref: RefObject<BottomSheetModal>) => void;
};

type BottomSheetTitleType = {
  title: string;
  setTitle: (title: string) => void;
};

type SubBottomSheetTitleType = {
  subTitle: string;
  setSubTitle: (subTitle: string) => void;
};

type SubBottomSheetDateType = {
  selectedDate: string;
  setSelectedDate: (selectedDate: string) => void;
};

type IngredientTitleTitleType = {
  ingredientTitle: string;
  setIngredientTitle: (title: string) => void;
};

type AddTitleType = {
  addTitle: string;
  setAddTitle: (addTitle: string) => void;
};

type LoadingType = {
  loadingTitle: string;
  setLoadingTitle: (loadingTitle: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
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

type ScrollYType = {
  scrollY: number;
  setScrollY: (scrollY: number) => void;
};

type UserReviewType = {
  userReview: {
    type?: string;
    prevImages?: string[];
    commentId?: number;
    boardId: number;
    star: number;
    comment: string;
    images?: string[];
    imagesFile?:
      | {
          name: string;
          type: string;
          uri: string;
        }[];
  };
  setUserReview: (
    userReview: Partial<{
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
    }>,
  ) => void;
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

export const useBottomSheetRef = create<BottomSheetRefType>(set => ({
  bottomSheetRef: {current: null},
  setBottomSheetRef: ref => set({bottomSheetRef: ref}),
}));

export const useSubBottomSheetRef = create<SubBottomSheetRefType>(set => ({
  subBottomSheetRef: {current: null},
  setSubBottomSheetRef: ref => set({subBottomSheetRef: ref}),
}));

export const useBottomSheetTitle = create<BottomSheetTitleType>(set => ({
  title: '',
  setTitle: (title: string) => set({title}),
}));

export const useSubBottomSheetTitle = create<SubBottomSheetTitleType>(set => ({
  subTitle: '',
  setSubTitle: (subTitle: string) => set({subTitle}),
}));

export const useIngredientTitle = create<IngredientTitleTitleType>(set => ({
  ingredientTitle: '',
  setIngredientTitle: (ingredientTitle: string) => set({ingredientTitle}),
}));

export const useAddModalInputText = create<AddTitleType>(set => ({
  addTitle: '',
  setAddTitle: (addTitle: string) => set({addTitle}),
}));

export const useLoading = create<LoadingType>(set => ({
  loadingTitle: '재료 등록중',
  setLoadingTitle: (loadingTitle: string) => set({loadingTitle}),
  loading: false,
  setLoading: (loading: boolean) => set({loading}),
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

export const useScrollY = create<ScrollYType>(set => ({
  scrollY: 0,
  setScrollY: (scrollY: number) => set({scrollY}),
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
  setUserReview: (
    userReview: Partial<{
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
    }>,
  ) =>
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
