import { getData } from './../api/axios';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './store';

//action.types
const GET_LIB_ITEM_SUCCESS = 'tempMonitor/libReducer/get_lib_item_success';

let initialState: Array<number> = []

export type InitialStateType = typeof initialState

//Reducer

const libReducer = (state = initialState, action: getLibItemSuccessType) => {
    switch (action.type) {
        case GET_LIB_ITEM_SUCCESS: {
            return action.payload
        }
        default:
            return state;
    }
};

//ActionCreators
type ActionsTypes = getLibItemSuccessType

type getLibItemSuccessType = {
    type: typeof GET_LIB_ITEM_SUCCESS
    payload: InitialStateType
}
const getLibSuccess = (payload: InitialStateType): getLibItemSuccessType => ({ type: GET_LIB_ITEM_SUCCESS, payload });

//ThunkCreators

export type DispachType = Dispatch<ActionsTypes | ThunkType>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getItem = (): ThunkType => async (dispatch, getState) => {
    debugger
    const data: InitialStateType = await getData
    console.log(data);
    dispatch(getLibSuccess(data))
};

export default libReducer;
