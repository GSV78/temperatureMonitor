import { getDataOfDay } from './../api/axios';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './store';

//action.types
const GET_DAY_ITEM_SUCCESS = 'tempMonitor/dayReducer/get_day_item_success';


export type ItemType = {
    name: string,
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
    t12: number
};
export type InitialDayStateType = Array<ItemType> | []

export let initialState: InitialDayStateType = []




//Reducer

const dayReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case GET_DAY_ITEM_SUCCESS: {
            console.log(action.payload);
            let result = []
            for (let hours = 0; hours < 24; hours++) {
                for (let min = 0; min < 60; min = min + 15) {
                    let match = action.payload.filter((elem) => elem.name == `${(hours < 10 ? '0' + hours : hours)}:${(min == 0 ? '00' : min)}`)
                    if (match.length) {
                        result.push(match[0])
                    } else {
                        result.push({ name: `${(hours < 10 ? '0' + hours : hours)}:${(min == 0 ? '00' : min)}` })
                    }
                }
            }
            return result
        }
        default:
            return state;
    }
};

//ActionCreators
type ActionsTypes = getDayItemSuccessType

type getDayItemSuccessType = {
    type: typeof GET_DAY_ITEM_SUCCESS
    payload: Array<ItemType>
}
const getDaySuccess = (payload: Array<ItemType>): getDayItemSuccessType => ({ type: GET_DAY_ITEM_SUCCESS, payload });

//ThunkCreators

export type DispachDayType = Dispatch<ActionsTypes | ThunkType>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>


export const getDay = (day: string): ThunkType => async (dispatch, getState) => {
    let data: Array<ItemType> = await getDataOfDay(day)
    console.log(data);
    dispatch(getDaySuccess(data))
};


export default dayReducer;
