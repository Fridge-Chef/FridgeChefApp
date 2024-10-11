import Bowl from './Svg/Bowl';
import AppleIcon from './Svg/Categories/AppleIcon';
import Bread from './Svg/Categories/Bread';
import Cheese from './Svg/Categories/Cheese';
import ChickenThigh from './Svg/Categories/ChickenThigh';
import Egg from './Svg/Categories/Egg';
import Fish from './Svg/Categories/Fish';
import Grain from './Svg/Categories/Grain';
import Instant from './Svg/Categories/Instant';
import Kimchi from './Svg/Categories/Kimchi';
import Seafood from './Svg/Categories/Seafood';
import Soybeans from './Svg/Categories/Soybeans';
import Vegetable from './Svg/Categories/Vegetable';

export const ingredients = [
  {id: 1, name: '소금류'},
  {id: 2, name: '설탕류'},
  {id: 3, name: '간장류'},
  {id: 4, name: '고추장'},
  {id: 5, name: '식용유 종류'},
  // {id: 6, name: '식용유 종류'},
  // {id: 8, name: '식용유 종류'},
  // {id: 9, name: '식용유 종류'},
  // {id: 7, name: '식용유 종류'},
  // {id: 10, name: '식용유 종류'},
  // {id: 11, name: '식용유 종류'},
  // {id: 12, name: '식용유 종류'},
  // {id: 13, name: '식용유 종류'},
  // {id: 14, name: '식용유 종류'},
];

export const itemList = [
  {id: 1, name: '라면'},
  {id: 2, name: '밥 (햇반)'},
  {id: 3, name: '김치류'},
  {id: 4, name: '계란'},
];

export const IngredientList = [
  {id: 1, name: '시금치'},
  {id: 2, name: '시어머니'},
  {id: 3, name: '시큼시큼'},
  {id: 4, name: '강아지'},
  {id: 5, name: '강냉이'},
  {id: 6, name: '갱냉이국'},
  {id: 7, name: '바지락'},
  {id: 8, name: '바람'},
  {id: 9, name: '고구마'},
  {id: 10, name: '고구마다 진짜'},
  {id: 11, name: '되나요'},
];

export const list = [
  {
    ingredients: [
      {
        ingredient: '라면',
        category: '',
        ingredient_id: 1,
        expiry_date: '2024-09-09T15:45:00', // 유통기한
        create_time: '2024-09-09T15:45:00', // 재료 추가 날짜
      },
      {
        ingredient: '식초',
        category: '',
        ingredient_id: 2,
        expiry_date: '2024-09-09T15:45:00', // 유통기한
        create_time: '2024-09-09T15:45:00', // 재료 추가 날짜
      },
      {
        ingredient: '고구마',
        category: '',
        ingredient_id: 3,
        expiry_date: '2024-09-09T15:45:00', // 유통기한
        create_time: '2024-09-09T15:45:00', // 재료 추가 날짜
      },
      {
        ingredient: '강아지',
        category: '',
        ingredient_id: 4,
        expiry_date: '2024-09-09T15:45:00', // 유통기한
        create_time: '2024-09-09T15:45:00', // 재료 추가 날짜
      },
      {
        ingredient: '도라에몽',
        category: '',
        ingredient_id: 5,
        expiry_date: '2024-09-09T15:45:00', // 유통기한
        create_time: '2024-09-09T15:45:00', // 재료 추가 날짜
      },
      {
        ingredient: '감자',
        category: '',
        ingredient_id: 6,
        expiry_date: '2024-09-09T15:45:00', // 유통기한
        create_time: '2024-09-09T15:45:00', // 재료 추가 날짜
      },
      {
        ingredient: '소세지',
        category: '',
        ingredient_id: 7,
        expiry_date: '2024-09-09T15:45:00', // 유통기한
        create_time: '2024-09-09T15:45:00', // 재료 추가 날짜
      },
      {
        ingredient: '설탕',
        category: '',
        ingredient_id: 8,
        expiry_date: '2024-09-09T15:45:00', // 유통기한
        create_time: '2024-09-09T15:45:00', // 재료 추가 날짜
      },
      {
        ingredient: '아보',
        category: '',
        ingredient_id: 9,
        expiry_date: '2024-09-09T15:45:00', // 유통기한
        create_time: '2024-09-09T15:45:00', // 재료 추가 날짜
      },
      {
        ingredient: '카레가루',
        category: '',
        ingredient_id: 10,
        expiry_date: '2024-09-09T15:45:00', // 유통기한
        create_time: '2024-09-09T15:45:00', // 재료 추가 날짜
      },
      // {
      //   ingredient: '자장면',
      //   category: '',
      //   ingredient_id: 11,
      //   expiry_date: '2024-09-09T15:45:00', // 유통기한
      //   create_time: '2024-09-09T15:45:00', // 재료 추가 날짜
      // },
      // {
      //   ingredient: '오징어 젓갈',
      //   category: '',
      //   ingredient_id: 12,
      //   expiry_date: '2024-09-09T15:45:00', // 유통기한
      //   create_time: '2024-09-09T15:45:00', // 재료 추가 날짜
      // },
      // {
      //   ingredient: '김치',
      //   category: '',
      //   ingredient_id: 13,
      //   expiry_date: '2024-09-09T15:45:00', // 유통기한
      //   create_time: '2024-09-09T15:45:00', // 재료 추가 날짜
      // },
      // {
      //   ingredient: '고추장',
      //   category: '',
      //   ingredient_id: 14,
      //   expiry_date: '2024-09-09T15:45:00', // 유통기한
      //   create_time: '2024-09-09T15:45:00', // 재료 추가 날짜
      // },
      // {
      //   ingredient: '식용유',
      //   category: '',
      //   ingredient_id: 15,
      //   expiry_date: '2024-09-09T15:45:00', // 유통기한
      //   create_time: '2024-09-09T15:45:00', // 재료 추가 날짜
      // },
      // {
      //   ingredient: '간장',
      //   category: '',
      //   ingredient_id: 16,
      //   expiry_date: '2024-09-09T15:45:00', // 유통기한
      //   create_time: '2024-09-09T15:45:00', // 재료 추가 날짜
      // },
    ],
  },
];

export const detailList = [
  {
    title: '간장류',
  },
  {
    title: '간장류',
  },
  {
    title: '간장류',
  },
  {
    title: '간장류',
  },
];

export const detailList2 = [
  {
    title: '간장류1',
  },
  {
    title: '간장류2',
  },
  {
    title: '간장류3',
  },
  {
    title: '간장류4',
  },
];

export const detailList3 = [
  {
    name: '닭가슴살 1쪽 (약 100g)',
  },
  {
    name: '잘 익은 김치 1/2컵 (작게 썬 것)',
  },
  {
    name: '밥 1공기 (또는 찬밥)',
  },
  {
    name: '물 3~4컵',
  },
  {
    name: '참기름 1큰술',
  },
  {
    name: '간장 1큰술',
  },
];

export const detailContent = [
  {
    step: '닭가슴살을 물에 넣고 약간의 소금을 넣어 삶아줍니다. 물이 끓으면 중불로 줄여 닭가슴살이 부드러워질 때까지 삶습니다 (약 10~15분).\n닭가슴살이 다 삶아지면 꺼내서 한 김 식힌 후 결대로 찢어 줍니다. (작은 크기로 찢으면 먹기 더 편합니다.)',
    image: '',
  },
  {
    step: '냄비에 참기름 1큰술을 두르고 다진 마늘을 넣어 볶습니다. 마늘 향이 올라오면 잘게 썬 김치를 넣고 약간의 간장(1큰술)을 넣어 함께 볶습니다.\n김치가 부드러워질 때까지 중불에서 3~5분 정도 볶아줍니다. 김치가 잘 익으면 김치 국물을 추가로 넣어주면 맛이 더 깊어집니다.',
    image: '',
  },
  {
    step: '닭가슴살을 물에 넣고 약간의 소금을 넣어 삶아줍니다.\n물이 끓으면 중불로 줄여 닭가슴살이 부드러워질 때까지 삶습니다 (약 10~15분).\n닭가슴살이 다 삶아지면 꺼내서 한 김 식힌 후 결대로 찢어 줍니다. (작은 크기로 찢으면 먹기 더 편합니다.)',
    image: '',
  },

  {
    step: '냄비에 참기름 1큰술을 두르고 다진 마늘을 넣어 볶습니다. 마늘 향이 올라오면 잘게 썬 김치를 넣고 약간의 간장(1큰술)을 넣어 함께 볶습니다.\n김치가 부드러워질 때까지 중불에서 3~5분 정도 볶아줍니다. 김치가 잘 익으면 김치 국물을 추가로 넣어주면 맛이 더 깊어집니다.',
    image: '',
  },
  {
    step: '불을 끄고 그릇에 담은 후 다진 대파를 위에 올려 장식합니다.\n취향에 따라 김치 국물을 조금 더 넣어 시원한 맛을 추가할 수 있습니다.',
    image: '',
  },
];

export const reviewContent = {
  content: `냉장고에 닭가슴살이 남아서 유통기한 지나기 전에 빨리 해먹고 싶었는데 김치죽으로 요리할 수 있다
냉장고에 닭가슴살이 남아서 유통기한 지나기 전에 빨리 해먹고 싶었는데 김치죽으로 요리할 수 있다..`,
};

export const userInfo = {
  user: {
    userName: '김민영',
    email: 'asdasd@naver.com',
    userImg: require('../assets/images/Frame.png'),
    userRank: '마스터 셰프',
  },
};

export const menuList = [
  {id: 1, text: '전체'},
  {id: 2, text: '이 주의 레시피'},
  {id: 3, text: '이 달의 레시피'},
];

export const menuList2 = [
  {id: 1, text: '전체'},
  {id: 2, text: '베스트 후기'},
];

export const myRecipes = [
  {
    id: 1,
    title: '피자가 너무 맛있어요',
    writer: '김민영',
    content:
      '피자가 너무 맛있어요 피자 토핑이 많고 치즈가 엄청 맛있어요! 특히 쭉쭉 늘어나는게 좋아요',
    point: 3,
    likes: 12,
    views: 12,
    img: require('../assets/images/textImage.jpg'),
  },
  {
    id: 2,
    title: '고기가 진정한 승자다',
    writer: '강선영',
    content: '고기가 진정한 승자다',
    point: 5,
    likes: 40,
    views: 22,
    img: require('../assets/images/testImage05.jpg'),
  },
  {
    id: 3,
    title: '비빔밥 맛있게 드세요!',
    writer: '고은이',
    content: '비빔밥 맛있게 드세요!',
    point: 2,
    likes: 20,
    views: 50,
    img: require('../assets/images/testImage02.jpeg'),
  },
  {
    id: 4,
    title: '음식은 역시 비빔밥입니다',
    writer: '김희선',
    content: '음식은 역시 비빔밥입니다\n비빔비빔\n비빔비빔',
    point: 4,
    likes: 33,
    views: 34,
    img: require('../assets/images/testImage04.jpg'),
  },
  {
    id: 5,
    title: '뜨끈한 김치찌개 드셔보세요!',
    writer: '윤성희',
    content: '뜨끈한 김치찌개 드셔보세요!',
    point: 4,
    likes: 14,
    views: 22,
    img: require('../assets/images/testImage03.jpg'),
  },
  {
    id: 6,
    title: '피자가 너무 맛있어요',
    writer: '김민영',
    content: '피자가 너무 맛있어요',
    point: 3,
    likes: 12,
    views: 12,
    img: require('../assets/images/textImage.jpg'),
  },
  {
    id: 7,
    title: '고기가 진정한 승자다',
    writer: '강선영',
    content: '고기가 진정한 승자다',
    point: 5,
    likes: 40,
    views: 22,
    img: require('../assets/images/testImage05.jpg'),
  },
  {
    id: 8,
    title: '비빔밥 맛있게 드세요!',
    writer: '고은이',
    content: '비빔밥 맛있게 드세요!',
    point: 2,
    likes: 20,
    views: 50,
    img: require('../assets/images/testImage02.jpeg'),
  },
  {
    id: 9,
    title: '음식은 역시 비빔밥입니다',
    writer: '김희선',
    content: '음식은 역시 비빔밥입니다',
    point: 4,
    likes: 33,
    views: 34,
    img: require('../assets/images/testImage04.jpg'),
  },
  {
    id: 10,
    title: '뜨끈한 김치찌개 드셔보세요!',
    writer: '윤성희',
    content: '뜨끈한 김치찌개 드셔보세요!',
    point: 4,
    likes: 14,
    views: 22,
    img: require('../assets/images/testImage03.jpg'),
  },
];

export const storageList = [
  {
    id: 1,
    title: '잎채소 (상추, 시금치 등)',
    expiryDate: '냉장 3~5일',
    content: '씻고 물기를 제거한 후, 키친타월에 감싸서 냉장 보관하세요.',
  },
  {
    id: 2,
    title: '생고기 (돼지고기, 소고기 등)',
    expiryDate: '냉장 3~5일',
    content:
      '고기는 바로 드시지 않을 거면 반드시 냉장고에 넣고, 2~3일 이내에 먹지 않으면 냉동 보관하는 게 좋아요.',
  },
  {
    id: 3,
    title: '가공육 (햄, 베이컨)',
    expiryDate: '개봉 후 냉장보관, 일주일 이내',
    content:
      '개봉 후에는 잘 밀봉해서 냉장 보관하고, 일주일 이내에 드시는게 좋아요.',
  },
  {
    id: 4,
    title: '해산물 (생선, 조개류)',
    expiryDate: '냉장보관 1~2일',
    content:
      '깨끗이 씻은 후 밀폐용기에 넣어 냉장 보관하고, 이틀 내에 드시는 게 좋아요.',
  },
  {
    id: 5,
    title: '유제품 (우유, 치즈, 요거트)',
    expiryDate: '우유 : 개봉 후 5~7일, 치즈: 1~2주\n요거트: 개봉 후 7일 이내',
    content:
      '우유는 냉장고 문보다는 안쪽에 넣어두세요. 치즈도 밀폐용기에 담아 냉장보관하면 오래 신선해요.',
  },
  {
    id: 6,
    title: '계란',
    expiryDate: '냉장보관 3~5주',
    content: '냉장 보관이 필수! 달걀칸이나 밀폐용기에 넣어주세요.',
  },
];

export const storageList2 = [
  {
    id: 1,
    title: '건조식품(쌀, 파스타, 건조 콩류)',
    expiryDate: '실온에서 수개월에서 1년까지도 보관',
    content:
      '밀폐용기에 담아 실온에서 보관하면 수개월에서 1년까지도 보관 가능해요.',
  },
  {
    id: 2,
    title: '감자, 고구마',
    expiryDate: '실온 2~4주, 냉장 23일, 냉동 36개월',
    content:
      '맛있게 먹기 위해선 실온보관이 좋아요. 서늘하고 어두운 곳에서 2~4주 정도 보관 가능해요.',
  },
  {
    id: 3,
    title: '빵',
    expiryDate: '실온 35일, 냉동 시 12개월',
    content: '실온 보관, 먹지 않을 건 냉동 보관!',
  },
  {
    id: 4,
    title: '바나나',
    expiryDate: '실온 3~7일',
    content:
      '실온에서 익히고, 숙성되면 냉장 보관 가능. 하지만 냉장 보관 시 껍질이 검게 변할 수 있어요.',
  },
  {
    id: 5,
    title: '양파, 마늘',
    expiryDate: '실온 1~2개월 (냉동 보관 시 장기 보관 가능)',
    content: '바람이 잘 통하는 서늘한 곳에 보관해 주세요.',
  },
];

export const storageSubList = [
  {
    id: 1,
    title: '유통기한 가까울 수록 앞쪽에 두기',
    content:
      '냉장고에 넣어두면 재료가 금방 잊혀져요. 유통기한이 가까운 재료는 눈에 보이게 앞쪽에 두세요.',
  },
  {
    id: 2,
    title: '밀폐용기 활용하기',
    content: '재료를 밀폐용기에 보관하면 신선도를 더 오래 유지할 수 있어요.',
  },
  {
    id: 3,
    title: '냉동 보관으로 유통기한 늘리기',
    content:
      '고기, 해산물, 빵 등은 냉동 보관하면 유통기한을 훨씬 연장할 수 있습니다.',
  },
  {
    id: 4,
    title: '냉장고 온도 유지하기',
    content:
      '냉장고는 4˚C 이하로 설정하면 식재료를 더 신선하게 보관할 수 있어요.',
  },
];

export const categoryList = [
  {id: 1, name: '미분류', icon: <Bowl />, icon2: <Vegetable />},
  {id: 2, name: '채소류', icon: <Vegetable />, icon2: <Vegetable />},
  {id: 3, name: '육류', icon: <ChickenThigh />, icon2: <ChickenThigh />},
  {id: 4, name: '생선류', icon: <Fish />, icon2: <Fish />},
  {id: 5, name: '해산물류', icon: <Seafood />, icon2: <Seafood />},
  {id: 6, name: '과일류', icon: <AppleIcon />, icon2: <AppleIcon />},
  {id: 7, name: '곡류', icon: <Grain />, icon2: <Grain />},
  {id: 8, name: '콩류', icon: <Soybeans />, icon2: <Soybeans />},
  {id: 9, name: '달걀류', icon: <Egg />, icon2: <Egg />},
  {id: 10, name: '유제품', icon: <Cheese />, icon2: <Cheese />},
  {id: 11, name: '빵류', icon: <Bread />, icon2: <Bread />},
  {id: 12, name: '가공식품', icon: <Instant />, icon2: <Instant />},
  {id: 13, name: '김치류', icon: <Kimchi />, icon2: <Kimchi />},
];

export const rankingMenuList = [
  {id: 1, text: '재료 많은순'},
  {id: 2, text: '별점순'},
  {id: 3, text: '좋아요순'},
  {id: 4, text: '최근순'},
];
