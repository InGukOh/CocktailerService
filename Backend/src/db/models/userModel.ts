import {
  IUserMongoModel,
  IUserModel,
  FindOneFilter,
  UpdateOneFilter,
} from '../types';
import { UserInfo } from '../../services/types';
import { IUser } from '../types';
import User from '../schemas/userSchema';
import { userQueries } from '../queries/userQuery';

export class UserMongoModel implements IUserMongoModel {
  public create = async (userInfo: UserInfo): Promise<IUser> => {
    const newUser = await User.create(userInfo);
    return newUser;
  };

  public getPosts = async (userId: number) => {
    const users: IUser[] = await User.aggregate(userQueries.findById(userId));
    return users;
  };

  public findById = async (userId: number): Promise<IUser | null> => {
    const filter = { id: userId };
    const projection = '-_id -__v';
    const user = await User.findOne(filter, projection);
    return user;
  };

  public findByFilter = async (
    filter: FindOneFilter,
  ): Promise<IUser | null> => {
    const foundUser = await User.findOne(filter);
    return foundUser;
  };

  public update = async (filter: FindOneFilter, update: UpdateOneFilter) => {
    const result = await User.updateOne(filter, update);
    return result;
  };

  public softDelete = async (
    filter: FindOneFilter,
    update: UpdateOneFilter,
  ) => {
    const result = await User.updateOne(filter, update);
    return result;
  };

  public checkDuplicate = async (filter: FindOneFilter): Promise<boolean> => {
    const result = await User.findOne(filter).countDocuments();
    return result ? true : false;
  };
}

export class UserModel implements IUserModel {
  Mongo = new UserMongoModel();
}

const userModel = new UserModel();

export { userModel };
