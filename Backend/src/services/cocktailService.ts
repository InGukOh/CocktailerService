import { CocktailServiceType, UpdateResult, CocktailObj } from './types';
import { Rankings } from 'types';

import { cocktailModel } from '../db';
import { AppError } from '../appError';
import { errorNames } from '../errorNames';

interface ReqData {
  [optionKey: string]: string;
}

class CocktailService {
  private readonly cocktailModel = cocktailModel;

  public async getHomeCocktailAndUserList(): Promise<Rankings> {
    const data: Rankings =
      await this.cocktailModel.getHomeCocktailAndUserList();
    if (!data) {
      throw new AppError(
        errorNames.noDataError,
        400,
        '칵테일 / 유저랭킹 조회실패!',
      );
    }
    return data;
  }

  public async createCocktail(cocktailObj: CocktailObj): Promise<number> {
    const data: number = await this.cocktailModel.createCocktail({
      ...cocktailObj,
    });

    if (!data) {
      throw new AppError(errorNames.noDataError, 400, '칵테일 생성 실패!');
    }

    return data;
  }

  public async getLists() {
    const data: CocktailServiceType[] = await this.cocktailModel.getLists();

    if (!data) {
      throw new AppError(
        errorNames.noDataError,
        400,
        '검색하신 칵테일이 존재하지 않아요!',
      );
    }

    return data;
  }

  public async findByUserId(userId: number) {
    const data = await this.cocktailModel.findByUserId(userId);

    return data;
  }

  public async findCocktailId(cocktailId: number, userId: number | null) {
    const data = await this.cocktailModel.findCocktailId(cocktailId, userId);

    if (!data) {
      throw new AppError(
        errorNames.noDataError,
        400,
        '이런! 이 칵테일은 누군가 다 마셨나봐요!!',
      );
    }

    return data;
  }

  public async findCocktailCategoryAndSearch(
    reqData: ReqData,
    endpoint: number,
  ) {
    const data = await this.cocktailModel.findCocktailCategoryAndSearch(
      reqData,
      endpoint,
    );

    if (data.length === 0) {
      throw new AppError(errorNames.noDataError, 400, 'noDataError');
    }

    return data;
  }

  public async updateCocktail(
    cocktailId: number,
    userId: number,
    cocktailObj: CocktailObj,
  ) {
    const data: UpdateResult = await this.cocktailModel.updateCocktail(
      cocktailId,
      userId,
      cocktailObj,
    );

    if (!data) {
      throw new AppError(errorNames.noDataError, 400);
    }

    return data;
  }

  public async deleteCocktail(userId: number, cocktailId: number) {
    // 트랜젝션 처리!! //
    const data: number = await this.cocktailModel.deleteCocktail(
      userId,
      cocktailId,
    );

    if (data === 0) {
      throw new AppError(
        errorNames.noDataError,
        400,
        '이런! 이 칵테일은 누군가 다 마셨나봐요!! 삭제하실 정보가 없어요!',
      );
    }

    return '칵테일을 삭제했습니다.';
  }

  public async cocktailLikes(userId: number, cocktailId: number) {
    // 트랜젝션 처리!! //
    const data: number = await this.cocktailModel.cocktailLikes(
      userId,
      cocktailId,
    );

    if (typeof data !== 'number') {
      throw new AppError(errorNames.noDataError, 400, '좋아요 요청 실패!!');
    }

    return data;
  }

  ////////////////////////////////
  //       목데이터 생성기       //
  ////////////////////////////////

  public async makeMockData() {
    const result: any = await this.cocktailModel.makeMockData();
    return result;
  }
}

export default CocktailService;
