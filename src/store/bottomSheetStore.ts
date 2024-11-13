import {create} from 'zustand';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {RefObject} from 'react';

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
