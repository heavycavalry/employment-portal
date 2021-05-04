import {ISingleUser, ISingleUserPhoto} from '../entities/users'
import * as actionTypes from '../actions/actionTypes/userTypes'

export interface IUsersReducer {
    usersList: ISingleUser[];
    photo: ISingleUserPhoto[];
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    photo: []
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
                photo: paylod.photo
            }
        }

        default: {
            return state
        }
    }
}