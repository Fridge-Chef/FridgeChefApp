import {create} from 'zustand';

type RankNameType = {
  rankName: string;
  rankingId: number;
  setRankName: (rankName: string) => void;
  setRankingId: (rankingId: number) => void;
};

export const useRankName = create<RankNameType>(set => ({
  rankName: '재료 많은순',
  rankingId: 1,
  setRankName: (rankName: string) => set({rankName}),
  setRankingId: (rankingId: number) => set({rankingId}),
}));

export const useRecipeLikeRankName = create<RankNameType>(set => ({
  rankName: '최신순',
  rankingId: 1,
  setRankName: (rankName: string) => set({rankName}),
  setRankingId: (rankingId: number) => set({rankingId}),
}));

export const useMyRecipeRankName = create<RankNameType>(set => ({
  rankName: '최신순',
  rankingId: 1,
  setRankName: (rankName: string) => set({rankName}),
  setRankingId: (rankingId: number) => set({rankingId}),
}));

export const useMyReviewRankName = create<RankNameType>(set => ({
  rankName: '최신순',
  rankingId: 1,
  setRankName: (rankName: string) => set({rankName}),
  setRankingId: (rankingId: number) => set({rankingId}),
}));

export const useCommunityMyRecipeName = create<RankNameType>(set => ({
  rankName: '최신순',
  rankingId: 1,
  setRankName: (rankName: string) => set({rankName}),
  setRankingId: (rankingId: number) => set({rankingId}),
}));
