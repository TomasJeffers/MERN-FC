import {
    SET_CURRENT_USER,
    USER_LOADING
} from '../actionTypes/user';

// const isEmpty = require('is-empty');

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            console.log('reducers : ', action)
            return {
                ...state,
                isAuthenticated: (action.payload ? true: false),
                user: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}