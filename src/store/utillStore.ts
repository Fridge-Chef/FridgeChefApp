import {create} from 'zustand';

type ScrollYType = {
  scrollY: number;
  setScrollY: (scrollY: number) => void;
};

export const useScrollY = create<ScrollYType>(set => ({
  scrollY: 0,
  setScrollY: (scrollY: number) => set({scrollY}),
}));
