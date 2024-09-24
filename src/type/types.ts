export type RecipeListType = {
  title: string;
  likes: number;
  favorites: number;
  ingredients: string[];
};

type IconType = {
  icon:
    | 'wallet'
    | 'heart'
    | 'heart2'
    | 'heart3'
    | 'heart4'
    | 'editSquare'
    | 'moreCircle'
    | 'plus'
    | 'arrowDown'
    | 'arrowDown2'
    | 'arrowLeft3'
    | 'smallPlus'
    | 'calendar'
    | 'close'
    | 'close2'
    | 'star'
    | 'back';
};

export type AppBarProps = {
  borderBottomWidth?: number;
  leftIcon: IconType;
  leftIconWidth: number;
  leftIconHeight: number;
  titleOn?: boolean;
  title?: string;
  rightOn?: boolean;
  rightTitleOn?: boolean;
  rightTitle?: string;
  onlyBackIcon?: boolean;
  rightIcon1?: IconType;
  rightIconWidth1?: number;
  rightIconHeight1?: number;
  rightIcon2?: IconType;
  rightIconWidth2?: number;
  rightIconHeight2?: number;
  onPress1?: () => void;
  onPress2?: () => void;
};
