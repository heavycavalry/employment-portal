import { Dispatch } from 'redux';
import * as actionTypes from "../actions/actionTypes/userTypes"
import { ISingleUser, ISingleUserPhoto, ISingleUserPost } from "../entities/users"

export const getUsers = (): Promise<any> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(reponse => reponse.json())
    .then(( usersList: ISingleUser[]) => {
        dispatch({
            type: actionTypes.GET_USERS,
            usersList

    })
})
}) as any;

export const getPhoto = (): Promise<any> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/photos')
    .then(reponse => reponse.json())
    .then(( photosList: ISingleUserPhoto[]) => {
        dispatch({
            type: actionTypes.GET_PHOTO,
            photosList

    })
})
}) as any;

export const getPost = (): Promise<any> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(reponse => reponse.json())
    .then(( postsList: ISingleUserPost[]) => {
        dispatch({
            type: actionTypes.GET_POST,
            postsList

    })
})
}) as any;