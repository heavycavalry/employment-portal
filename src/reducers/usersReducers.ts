import {ISingleUser, ISingleUserComment, ISingleUserPhoto, ISingleUserPost} from '../entities/users'
import * as actionTypes from '../actions/actionTypes/userTypes'
 /* eslint-disable */ 
export interface IUsersReducer {
    usersList: ISingleUser[];
    photosList: ISingleUserPhoto[];
    postsList: ISingleUserPost[];
    commentsList: ISingleUserComment[];
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    photosList: [],
    postsList: [],
    commentsList: []
})

export default (state = defaultState(), action:any) => {
    switch (action.type) {
        case actionTypes.GET_USERS: {
            const payload: actionTypes.IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                usersList: payload.usersList
            }
        }
        case actionTypes.GET_PHOTO: {
            const payload: actionTypes.IUserTypes['GET_PHOTO'] = action;
            return {
                ...state,
                photosList: payload.photosList
            }
        }
        case actionTypes.GET_POST: {
            const payload: actionTypes.IUserTypes['GET_POST'] = action;
            return {
                ...state,
                postsList: payload.postsList
            }
        }
        case actionTypes.GET_COMMENT: {
            const payload: actionTypes.IUserTypes['GET_COMMENT'] = action;
            return {
                ...state,
                commentsList: payload.commentsList
            }
        }

        default: {
            return state
        }
    }
}