//service

import { CocktailGetResData } from 'types';

export interface Cocktail {
  id: number;
  owner: string;
  category: string;
  name: string;
  official: boolean;
  flavor: string;
  degree: number;
  img: string;
  ratio: object;
  content: string;

  readonly cocktailInfo: CocktailGetResData;
}
