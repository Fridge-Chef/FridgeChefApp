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
  | 'edit'
  | 'edit2'
  | 'editSquare'
  | 'googleLogo'
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
  rightTitleOn?: boolean;
  rightTitle?: string;
  onlyBackIcon?: boolean;
  rType1?: IconProps;
  rType2?: IconProps;
  onPress1?: () => void;
  onPress2?: () => void;
  textOnPress?: () => void;
};

export type RecipeList = {
  ingredient: string;
  category: string;
  ingredient_id: number;
  expiry_date: string;
  create_time: string;
};
