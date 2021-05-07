import { ISingleUser, ISingleUserPhoto, ISingleUserPost} from '../../entities/users';
export const GET_USERS = 'GET_USERS';
export const GET_PHOTO = 'GET_PHOTO';
export const GET_POST = 'GET_POST';

export interface IUserTypes {
    GET_USERS: {
        usersList: ISingleUser[];
    }
    GET_PHOTO: {
        photosList: ISingleUserPhoto[];
    }
    GET_POST: {
        postsList: ISingleUserPost[];
    }
}