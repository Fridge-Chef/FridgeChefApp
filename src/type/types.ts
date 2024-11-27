import {ColorValue} from 'react-native';

export type RecipeListType = {
  title: string;
  username: string;
  boardId: number;
  rating: number;
  starTotal: number;
  hitTotal: number;
  dishCategory: string;
  dishTime: string;
  dishLevel: string;
  mainImage: string;
  likes: number;
  favorites: number;
  myLike: number;
  reviews: number;
  description: string;
  recipeIngredients: {name: string; details: string}[];
  instructions: {content: string; imageLink: string}[];
};

type IconProps =
  | 'back'
  | 'arrowRight'
  | 'close2'
  | 'close3'
  | 'detailBack'
  | 'detailHeart'
  | 'detailReviewMore'
  | 'detailShare'
  | 'edit2'
  | 'editSquare'
  | 'googleLogo'
  | 'headerClose'
  | 'heart'
  | 'kakaoLogo'
  | 'more'
  | 'notification'
  | 'plus'
  | 'star2'
  | 'tabHeart'
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
  imageLink: string;
  imageFile: {
    name: string;
    type: string;
    uri: string;
  };
};

export type AddIngredientType = {
  mainImage: string;
  mainImageFile: {
    name: string;
    type: string;
    uri: string;
  };
  name: string;
  description: string;
  dishCategory: string;
  dishTime: string;
  dishLevel: string;
  recipeIngredients: RecipeIngredientType[];
  instructions: InstructionsType[];
};

export type AddRecipeReviewType = {
  type?: string | undefined;
  commentId?: number | undefined;
  comment: string;
  prevImages?: string[];
  images?: string[];
  imagesFile?:
    | {
        name: string;
        type: string;
        uri: string;
      }[]
    | undefined;
  star: number;
};

export type ReviewType = {
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
  id: number;
  title: string;
  userName: string;
  mainImage: string;
  star: number;
  hit: number;
  myHit: boolean;
  click: number;
  have: number;
  withoutCount: number;
  without: string[];
};

export type GetMyRecipeListType = {
  boardId: number;
  title: string;
  userName: string;
  mainImage: string;
  star: number;
  hit: number;
  myHit: boolean;
  click: number;
  have: number;
  withoutCount: number;
  without: string[];
};

export type ListData = {
  expirationDate?: string;
  ingredientCategory?: string;
  ingredientName: string;
  storage: 'REFRIGERATION' | 'TEMPERATURE';
};

export type recipeReviewDataType = {
  boardId: number;
  reviewData: AddRecipeReviewType;
};

export type RecipeReviewDetailType = {
  id: number;
  boardId: number;
  comments: string;
  createdAt: string;
  myHit: boolean;
  imageLink: string[];
  like: number;
  star: number;
  userName: string;
};

export type RecipeReviewListType = {
  content: RecipeReviewDetailType[];
  page: {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
};

export type RecipeReviewLikeType = {
  boardId: number;
  commentId: number;
};

export type RecipeDetailReviewUpdateType = {
  boardId: number;
  commentId: number;
  review: AddRecipeReviewType;
};

export type RecipeBookListItemType = {
  content: {
    hit: number;
    id: number;
    mainImageLink: string;
    star: number;
    title: string;
  }[];
};
