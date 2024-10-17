import BottomSheet, {BottomSheetModal} from '@gorhom/bottom-sheet';
import {RefObject} from 'react';
import {create} from 'zustand';

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
  userReview: {reviewPoint: number; reviewContent: string; reviewImg: string};
  setUserReview: (
    userReview: Partial<{
      reviewPoint: number;
      reviewContent: string;
      reviewImg: string;
    }>,
  ) => void;
};

export const useBottomSheetRef = create<BottomSheetRefType>(set => ({
  bottomSheetRef: {current: null},
  setBottomSheetRef: ref => set({bottomSheetRef: ref}),
}));

export const useSubBottomSheetRef = create<SubBottomSheetRefType>(set => ({
  subBottomSheetRef: {current: null},
  setSubBottomSheetRef: ref => set({subBottomSheetRef: ref}),
}));

export const useSubBottomSheetDate = create<SubBottomSheetDateType>(set => ({
  selectedDate: '날짜를 선택해 주세요',
  setSelectedDate: (selectedDate: string) => set({selectedDate}),
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
  expiryDate: '',
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
  userReview: {reviewPoint: 0, reviewContent: '', reviewImg: ''},
  setUserReview: (
    userReview: Partial<{
      reviewPoint: number;
      reviewContent: string;
      reviewImg: string;
    }>,
  ) =>
    set(state => ({
      userReview: {
        ...state.userReview,
        ...userReview,
      },
    })),
}));
