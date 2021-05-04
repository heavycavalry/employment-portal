import { ISingleUser, ISingleUserPhoto } from '../../entities/users';
export const GET_USERS = 'GET_USERS';
export const GET_PHOTO = 'GET_PHOTO';

export interface IUserTypes {
    GET_USERS: {
        usersList: ISingleUser[];
    }
    GET_PHOTO: {
        photo: ISingleUserPhoto[];
    }
}