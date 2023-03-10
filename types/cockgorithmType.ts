export interface CockgorithmReqData {
  category: string;
  alcohol: string;
  degree: string;
  ingredients: string[];
}

export interface ProcessedMaterail {
  category: string;
  alcohol: string;
  minDegree: number;
  maxDegree: number;
  ingredients: string[];
}

export interface CockgorithmResData {
  isFound: boolean;
  data?: CockgorithmCocktail;
}

export interface CockgorithmCocktail {
  id: number;
  name: string;
  img: string;
  degree: number;
  content: string;
}
