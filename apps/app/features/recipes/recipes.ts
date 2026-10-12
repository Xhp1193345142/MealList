import type { ImageSourcePropType } from 'react-native';

export type Recipe = {
  id: string;
  name: string;
  minutes: number;
  difficulty: string;
  description: string;
  image: ImageSourcePropType;
};

export const recipes: Recipe[] = [
  {
    id: 'green-pepper-pork',
    name: '青椒炒肉',
    minutes: 15,
    difficulty: '简单',
    description: '青椒爽脆，肉片鲜香',
    image: require('../../assets/images/green-pepper-pork.png'),
  },
  {
    id: 'tomato-eggs',
    name: '番茄炒蛋',
    minutes: 10,
    difficulty: '简单',
    description: '酸甜开胃的家常味',
    image: require('../../assets/images/tomato-eggs.png'),
  },
];
