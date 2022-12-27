import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { CocktailCreateReqData, Rankings } from 'types';

import CocktailService from '../services/cocktailService';

class CocktailController {
  private readonly cocktailService = new CocktailService();

  public getHomeCocktailAndUserList = async (req: Req, res: Res) => {
    console.log('getHomeCocktailAndUserList');

    const data: Rankings =
      await this.cocktailService.getHomeCocktailAndUserList();

    res.status(200).json({
      cocktailRanking: data.cocktailRankings,
      userRanking: data.userRankings,
    });
  };

  public createCocktail = async (req: Req, res: Res) => {
    console.log('createCocktail');

    const cocktailInfo: CocktailCreateReqData = req.body;

    const createCocktailData: number =
      await this.cocktailService.createCocktail(cocktailInfo);

    res.status(200).json({ data: createCocktailData });
  };

  public getLists = async (req: Req, res: Res) => {
    console.log('getLists');

    const lists = await this.cocktailService.getLists();

    res.status(200).json({ lists: lists });
  };

  public findByUserId = async (req: Req, res: Res) => {
    console.log('findByUserId');

    const userId = req.user;

    const lists = await this.cocktailService.findByUserId(userId);

    res.status(200).json({ lists: lists });
  };

  public findCocktailId = async (req: Req, res: Res) => {
    console.log('findCocktailId');

    // const userId = req.user;

    const cocktailId = Number(req.params.cocktailId);

    const cocktail = await this.cocktailService.findCocktailId(cocktailId, 108);

    console.log(cocktail);

    res.status(200).json(cocktail);
  };

  public findCocktailCategoryAndSearch = async (req: Req, res: Res) => {
    console.log('findCocktailCategoryAndSearch');

    interface ReqData {
      category: string;
      [optionKey: string]: string;
    }

    const reqData: ReqData = {
      category: String(req.query.category),
    };

    if (req.query.official) {
      reqData.official = String(req.query.official);
    }
    if (req.query.keyword) {
      reqData.keyword = String(req.query.keyword);
    }

    console.log(reqData);

    const endpoint = Number(req.query.endpoint) || 0;

    const categoryLists =
      await this.cocktailService.findCocktailCategoryAndSearch(
        reqData,
        endpoint,
      );

    res.status(200).json({ categoryLists: categoryLists });
  };

  public updateCocktail = async (req: Req, res: Res) => {
    const cocktailId = Number(req.params.cocktailId);

    const updateCocktailInfo: CocktailCreateReqData = req.body;

    const result: any = await this.cocktailService.updateCocktail(
      cocktailId,
      updateCocktailInfo,
    );

    res.status(200).json({ updateCocktailInfo: updateCocktailInfo });
  };

  public deleteCocktail = async (req: Req, res: Res) => {
    const cocktailId = Number(req.params.cocktailId);

    const result: string = await this.cocktailService.deleteCocktail(
      cocktailId,
    );

    res.status(200).json({ message: result });
  };

  public cocktailLikes = async (req: Req, res: Res) => {
    const cocktailId = Number(req.params.cocktailId);

    const userId = Number(req.user.userId);

    const result: number = await this.cocktailService.cocktailLikes(
      userId,
      cocktailId,
    );

    res.status(200).json({ likes: result });
  };

  ////////////////////////////////
  //       목데이터 생성기       //
  ////////////////////////////////

  public makeMockData = async (req: Req, res: Res) => {
    console.log('생성기 시작 _controller');

    const result: any = await this.cocktailService.makeMockData();

    res.status(200).json({ result: result });
  };
}

const cocktailController = new CocktailController();

export { cocktailController };
