import {
    EXP_REQUEST,
    EXP_SUCCESS,
    EXP_ERROR,
    EXP_RESET,
} from '../_actions/types';

const initialState = {
    dataLoading: false,
    responseData: null,
    responseError: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case EXP_REQUEST:
            return {
                ...state,
                dataLoading: true,
                responseData: null,
                responseError: null
            };
        case EXP_SUCCESS:
            return {
                ...state,
                dataLoading: false,
                responseData: action.payload,
                responseError: null
            };
        case EXP_ERROR:
            return {
                ...state,
                dataLoading: false,
                responseData: null,
                responseError: action.payload
            };
        case EXP_RESET:
            return {...state};
        default:
            return state;
    }
}
