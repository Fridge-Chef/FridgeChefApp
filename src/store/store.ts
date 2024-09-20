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

export const useBottomSheetRef = create<BottomSheetRefType>(set => ({
  bottomSheetRef: {current: null},
  setBottomSheetRef: ref => set({bottomSheetRef: ref}),
}));

export const useBottomSheetTitle = create<BottomSheetTitleType>((set, get) => ({
  title: '',
  setTitle: (title: string) => set({title}),
}));

export const useIngredientTitle = create<IngredientTitleTitleType>(
  (set, get) => ({
    ingredientTitle: '',
    setIngredientTitle: (ingredientTitle: string) => set({ingredientTitle}),
  }),
);
