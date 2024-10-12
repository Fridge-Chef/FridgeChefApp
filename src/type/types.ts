import {ColorValue} from 'react-native';

export type RecipeListType = {
  title: string;
  likes: number;
  favorites: number;
  ingredients: string[];
};

type IconProps =
  | 'back'
  | 'arrowDown2'
  | 'arrowRight'
  | 'bottomButton'
  | 'calendar'
  | 'close'
  | 'close2'
  | 'close3'
  | 'detailBack'
  | 'detailHeart'
  | 'detailReviewMore'
  | 'detailShare'
  | 'edit'
  | 'edit2'
  | 'editSquare'
  | 'googleLogo'
  | 'headerClose'
  | 'heart'
  | 'heart2'
  | 'heart3'
  | 'heart4'
  | 'kakaoLogo'
  | 'likeIcon'
  | 'loginIcon'
  | 'more'
  | 'moreList'
  | 'notification'
  | 'plus'
  | 'plus2'
  | 'send'
  | 'star'
  | 'star2'
  | 'tabHeart'
  | 'userIcon2'
  | 'wallet';

export type AppBarProps = {
  borderBottomWidth?: number;
  type: IconProps;
  titleOn?: boolean;
  title?: string;
  rightOn?: boolean;
  rightTextColor?: ColorValue;
  rightTitleOn?: boolean;
  rightTitle?: string;
  onlyBackIcon?: boolean;
  rType1?: IconProps;
  rType2?: IconProps;
  rType3?: IconProps | null;
  onBackPress?: () => void;
  onPress1?: () => void;
  onPress2?: () => void;
  onPress3?: () => void;
  textOnPress?: () => void;
  shadow?: boolean;
  elevation?: number;
};

export type RecipeList = {
  ingredient: string;
  category: string;
  ingredient_id: number;
  expiry_date: string;
  create_time: string;
};

export type Ingredient = {
  name: string;
  quantity: string;
};

export type StepType = {
  step: string;
  image: string;
};

export type AddIngredientType = {
  addRecipeData: {
    mainImage: string;
    mainTitle: string;
    mainContent: string;
    ingredients: Ingredient[];
    step: StepType[];
  };

  setAddRecipeData: React.Dispatch<
    React.SetStateAction<{
      mainImage: string;
      mainTitle: string;
      mainContent: string;
      ingredients: Ingredient[];
      step: StepType[];
    }>
  >;
};
