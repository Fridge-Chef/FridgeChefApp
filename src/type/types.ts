import {ColorValue} from 'react-native';

export type RecipeListType = {
  id: number;
  writer: string;
  dishCategory: string;
  dishTime: string;
  dishLevel: string;
  mainImage: string;
  name: string;
  likes: number;
  favorites: number;
  myLike: number;
  reviews: number;
  description: string;
  recipeIngredients: {name: string; details: string}[];
  instructions: {content: string; image: string}[];
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

export type RecipeIngredientType = {
  name: string;
  details: string;
};

export type InstructionsType = {
  content: string;
  image: string;
};

export type AddIngredientType = {
  mainImage: string;
  name: string;
  description: string;
  dishCategory: string;
  dishTime: string;
  dishLevel: string;
  recipeIngredients: RecipeIngredientType[];
  instructions: InstructionsType[];
};

export type AddIngredientPageType = {
  addRecipeData: AddIngredientType;
  setAddRecipeData: React.Dispatch<React.SetStateAction<AddIngredientType>>;
};

export type UserData = {
  user: {
    createAt: string;
    email: string;
    profileLink: string;
    role: string;
    username: string;
  };
};

export type GetRecipeListType = {
  boardId: number;
  click: number;
  createTime: string;
  hit: number;
  mainImage: string;
  mainImageId: number;
  myHit: boolean;
  sortType: 'LATEST' | 'ALL';
  star: number;
  title: string;
  userName: string;
};

export type ListData = {
  expirationDate?: string;
  ingredientCategory?: string;
  ingredientName: string;
  storage: 'REFRIGERATION' | 'TEMPERATURE';
};
