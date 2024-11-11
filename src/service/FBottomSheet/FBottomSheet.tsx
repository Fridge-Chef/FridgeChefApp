import AddIngredient from '../../components/BottomSheet/AddIngredient/AddIngredient';
import AddRecipeCategory from '../../components/BottomSheet/AddRecipeCategory/AddRecipeCategory';
import DetailReviewOption from '../../components/BottomSheet/DetailReviewOption/DetailReviewOption';
import Management from '../../components/BottomSheet/ExpiryDate/Management';
import IngredientList from '../../components/BottomSheet/IngredientList/IngredientList';
import Ranking from '../../components/BottomSheet/Ranking/Ranking';
import RecipeRanking from '../../components/BottomSheet/RecipeBookRanking/RecipeRanking';

type FBottomSheetProps = {
  title: string;
  setRankName: (rankName: string) => void;
  rankingId: number;
  setRankingId: (rankingId: number) => void;
  setMyRanking: (rankName: string) => void;
  myRankingId: number;
  setMyRankingId: (rankingId: number) => void;
  setCommunityRankingName: (rankName: string) => void;
  communityRankingId: number;
  setCommunityRankingId: (rankingId: number) => void;
  setMyReviewRanking: (rankName: string) => void;
  myReviewRankingId: number;
  setMyReviewRankingId: (rankingId: number) => void;
};

export const handleIndex = (title: string) => {
  if (
    title === '순위' ||
    title === '좋아요 랭킹' ||
    title === '나의레시피' ||
    title === '나만의레시피' ||
    title === '나의후기' ||
    title === '디테일리뷰옵션'
  ) {
    return 1;
  } else {
    return 0;
  }
};

export const bottomScreen = ({
  title,
  setRankName,
  rankingId,
  setRankingId,
  setMyRanking,
  myRankingId,
  setMyRankingId,
  setCommunityRankingName,
  communityRankingId,
  setCommunityRankingId,
  setMyReviewRanking,
  myReviewRankingId,
  setMyReviewRankingId,
}: FBottomSheetProps) => {
  switch (title) {
    case '재료 추가':
      return <AddIngredient />;
    case '유통기한 등록':
      return <Management />;
    case '재료보기':
      return <IngredientList />;
    case '나의레시피등록':
      return <AddRecipeCategory />;
    case '순위':
      return <Ranking />;
    case '좋아요 랭킹':
      return (
        <RecipeRanking
          setRankName={setRankName}
          rankingId={rankingId}
          setRankingId={setRankingId}
        />
      );
    case '나의레시피':
      return (
        <RecipeRanking
          setRankName={setMyRanking}
          rankingId={myRankingId}
          setRankingId={setMyRankingId}
        />
      );
    case '나만의레시피':
      return (
        <RecipeRanking
          setRankName={setCommunityRankingName}
          rankingId={communityRankingId}
          setRankingId={setCommunityRankingId}
        />
      );
    case '나의후기':
      return (
        <RecipeRanking
          setRankName={setMyReviewRanking}
          rankingId={myReviewRankingId}
          setRankingId={setMyReviewRankingId}
        />
      );
    case '디테일리뷰옵션':
      return <DetailReviewOption />;
    default:
      break;
  }
};
