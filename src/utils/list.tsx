import AppleIcon from './Svg/Categories/AppleIcon';
import AppleIconDisable from './Svg/Categories/AppleIconDisable';
import Bowl from './Svg/Categories/Bowl';
import Bread from './Svg/Categories/Bread';
import BreadDisable from './Svg/Categories/BreadDisable';
import Cheese from './Svg/Categories/Cheese';
import CheeseDisable from './Svg/Categories/CheeseDisable';
import ChickenThigh from './Svg/Categories/ChickenThigh';
import ChickenThighDisable from './Svg/Categories/ChickenThighDisable';
import Egg from './Svg/Categories/Egg';
import EggDisable from './Svg/Categories/EggDisable';
import Fish from './Svg/Categories/Fish';
import FishDisable from './Svg/Categories/FishDisable';
import Grain from './Svg/Categories/Grain';
import GrainDisable from './Svg/Categories/GrainDisable';
import Instant from './Svg/Categories/Instant';
import InstantDisable from './Svg/Categories/InstantDisable';
import Kimchi from './Svg/Categories/Kimchi';
import KimchiDisable from './Svg/Categories/KimchiDisable';
import Seafood from './Svg/Categories/Seafood';
import SeafoodDisable from './Svg/Categories/SeafoodDisable';
import Soybeans from './Svg/Categories/Soybeans';
import SoybeansDisable from './Svg/Categories/SoybeansDisable';
import Vegetable from './Svg/Categories/Vegetable';
import VegetableDisable from './Svg/Categories/VegetableDisable';

export const menuList = [
  {id: 1, text: '전체'},
  {id: 2, text: '이 주의 레시피'},
  {id: 3, text: '이 달의 레시피'},
];

export const menuList2 = [
  {id: 1, text: '전체'},
  {id: 2, text: '베스트 후기'},
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
  {id: 1, name: '미분류', icon: <Bowl />, icon2: <Bowl />},
  {id: 2, name: '채소류', icon: <VegetableDisable />, icon2: <Vegetable />},
  {id: 3, name: '육류', icon: <ChickenThighDisable />, icon2: <ChickenThigh />},
  {id: 4, name: '생선류', icon: <FishDisable />, icon2: <Fish />},
  {id: 5, name: '해산물류', icon: <SeafoodDisable />, icon2: <Seafood />},
  {id: 6, name: '과일류', icon: <AppleIconDisable />, icon2: <AppleIcon />},
  {id: 7, name: '곡류', icon: <GrainDisable />, icon2: <Grain />},
  {id: 8, name: '콩류', icon: <SoybeansDisable />, icon2: <Soybeans />},
  {id: 9, name: '달걀류', icon: <EggDisable />, icon2: <Egg />},
  {id: 10, name: '유제품', icon: <CheeseDisable />, icon2: <Cheese />},
  {id: 11, name: '빵류', icon: <BreadDisable />, icon2: <Bread />},
  {id: 12, name: '가공식품', icon: <InstantDisable />, icon2: <Instant />},
  {id: 13, name: '김치류', icon: <KimchiDisable />, icon2: <Kimchi />},
];

export const rankingMenuList = [
  {id: 1, text: '재료 많은순'},
  {id: 2, text: '별점순'},
  {id: 3, text: '좋아요순'},
  {id: 4, text: '최신순'},
];

export const RecipeBookRankingList = [
  {id: 1, text: '최신순'},
  {id: 2, text: '별점순'},
  {id: 3, text: '좋아요순'},
];

export const AddRecipeFoodStyleList = [
  {id: 1, text: '한식'},
  {id: 2, text: '분식'},
  {id: 3, text: '양식'},
  {id: 4, text: '일식'},
  {id: 5, text: '중식'},
  {id: 6, text: '퓨전'},
  {id: 7, text: '간식/디저트'},
];

export const AddRecipeFoodTypeList = [
  {id: 1, text: '반찬'},
  {id: 2, text: '밥류'},
  {id: 3, text: '국/찌개'},
  {id: 4, text: '찜/탕'},
  {id: 5, text: '면류'},
  {id: 6, text: '메인 요리'},
  {id: 7, text: '간편식'},
  {id: 8, text: '샐러드'},
  {id: 9, text: '튀김'},
];

export const AddRecipeLevelList = [
  {id: 1, text: '쉬움'},
  {id: 2, text: '중간'},
  {id: 3, text: '어려움'},
];
