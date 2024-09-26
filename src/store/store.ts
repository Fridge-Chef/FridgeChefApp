import BottomSheet from '@gorhom/bottom-sheet';
import {RefObject} from 'react';
import {create} from 'zustand';

type BottomSheetRefType = {
  bottomSheetRef: RefObject<BottomSheet>;
  setBottomSheetRef: (ref: RefObject<BottomSheet>) => void;
};

type BottomSheetTitleType = {
  title: string;
  setTitle: (title: string) => void;
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
  tabBarName: string;
  index: number;
  setTabBarName: (tabBarName: string) => void;
  setIndex: (index: number) => void;
};

export const useBottomSheetRef = create<BottomSheetRefType>(set => ({
  bottomSheetRef: {current: null},
  setBottomSheetRef: ref => set({bottomSheetRef: ref}),
}));

export const useBottomSheetTitle = create<BottomSheetTitleType>(set => ({
  title: '',
  setTitle: (title: string) => set({title}),
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
  tabBarName: '',
  index: 0,
  setTabBarName: (tabBarName: string) => set({tabBarName}),
  setIndex: (index: number) => set({index}),
}));
