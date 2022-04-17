import { getData, sendData } from './../api/axios';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './store';

//action.types
const GET_LIB_ITEM_SUCCESS = 'tempMonitor/libReducer/get_lib_item_success';


export type InitialStateType = {
    day: string,
    time: string,
    t1: number,
    t2: number,
    t3: number,
    t4: number,
    t5: number,
    t6: number,
    t7: number,
    t8: number,
    t9: number,
    t10: number,
    t11: number,
    t12: number,
    arr: Array<number>
};

let dateAndTime = new Date();
let initialState: InitialStateType = {
    day: `${dateAndTime.getDate().toString().length === 1 ? "0" + dateAndTime.getDate() : dateAndTime.getDate()}.${(dateAndTime.getMonth() + 1).toString().length === 1 ? "0" + (dateAndTime.getMonth() + 1) : (dateAndTime.getMonth() + 1)}.${dateAndTime.getFullYear()}`,
    time: `${dateAndTime.getHours().toString().length === 1 ? "0" + dateAndTime.getHours() : dateAndTime.getHours()}:${dateAndTime.getMinutes().toString().length === 1 ? "0" + dateAndTime.getMinutes() : dateAndTime.getMinutes()}`,
    t1: 0,
    t2: 0,
    t3: 0,
    t4: 0,
    t5: 0,
    t6: 0,
    t7: 0,
    t8: 0,
    t9: 0,
    t10: 0,
    t11: 0,
    t12: 0,
    arr: []
}




//Reducer

const libReducer = (state = initialState, action: getLibItemSuccessType) => {
    switch (action.type) {
        case GET_LIB_ITEM_SUCCESS: {
            let dateAndTime = new Date();
            return {
                day: `${dateAndTime.getDate().toString().length === 1 ? "0" + dateAndTime.getDate() : dateAndTime.getDate()}.${(dateAndTime.getMonth() + 1).toString().length === 1 ? "0" + (dateAndTime.getMonth() + 1) : (dateAndTime.getMonth() + 1)}.${dateAndTime.getFullYear()}`,
                time: `${dateAndTime.getHours().toString().length === 1 ? "0" + dateAndTime.getHours() : dateAndTime.getHours()}:${dateAndTime.getMinutes().toString().length === 1 ? "0" + dateAndTime.getMinutes() : dateAndTime.getMinutes()}`,
                t1: action.payload[0],
                t2: action.payload[1],
                t3: action.payload[2],
                t4: action.payload[3],
                t5: action.payload[4],
                t6: action.payload[5],
                t7: action.payload[6],
                t8: action.payload[7],
                t9: action.payload[8],
                t10: action.payload[9],
                t11: action.payload[10],
                t12: action.payload[11],
                arr: action.payload
            }
        }
        default:
            return state;
    }
};

//ActionCreators
type ActionsTypes = getLibItemSuccessType

type getLibItemSuccessType = {
    type: typeof GET_LIB_ITEM_SUCCESS
    payload: Array<number>
}
const getLibSuccess = (payload: Array<number>): getLibItemSuccessType => ({ type: GET_LIB_ITEM_SUCCESS, payload });

//ThunkCreators

export type DispachType = Dispatch<ActionsTypes | ThunkType>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getItem = (): ThunkType => async (dispatch, getState) => {
    let data: Array<number> = await getData()
    console.log(data);
    dispatch(getLibSuccess(data))
};
export const getDay = (): ThunkType => async (dispatch, getState) => {
    let data: Array<number> = await getData()
    console.log(data);
    dispatch(getLibSuccess(data))
};

export const sendItem = (): ThunkType => async (dispatch, getState) => {
    let data: InitialStateType = getState().lib
    console.log(data);
    if (data.time.includes(':00') || data.time.includes(':15') || data.time.includes(':30') || data.time.includes(':45')) {
        sendData(data)
        console.log('post to DB');
    }
};

export default libReducer;
