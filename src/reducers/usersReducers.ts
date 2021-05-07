import {ISingleUser, ISingleUserPhoto, ISingleUserPost} from '../entities/users'
import * as actionTypes from '../actions/actionTypes/userTypes'

export interface IUsersReducer {
    usersList: ISingleUser[];
    photosList: ISingleUserPhoto[];
    postsList: ISingleUserPost[];
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    photosList: [],
    postsList: []
})

export default (state = defaultState(), action:any) => {
    switch (action.type) {
        case actionTypes.GET_USERS: {
            const paylod: actionTypes.IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                usersList: paylod.usersList
            }
        }
        case actionTypes.GET_PHOTO: {
            const paylod: actionTypes.IUserTypes['GET_PHOTO'] = action;
            return {
                ...state,
                photosList: paylod.photosList
            }
        }
        case actionTypes.GET_POST: {
            const paylod: actionTypes.IUserTypes['GET_POST'] = action;
            return {
                ...state,
                postsList: paylod.postsList
            }
        }

        default: {
            return state
        }
    }
}