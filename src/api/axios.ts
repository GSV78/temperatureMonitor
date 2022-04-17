import axios from "axios";
import { ItemType } from "../redux/dayReducer";
import { InitialStateType } from "../redux/libReducer";

const instance = axios.create({
    baseURL: 'http://beeb0a9e670c.sn.mynetname.net:8383',
    responseType: 'document',
    transformResponse: [function (data) {
        let arr: Array<number> = []
        let nodes = data.querySelectorAll('h1');
        nodes.forEach((elem: any) => {
            let result = elem.innerText.split(': ');
            arr.push(+result[1]);
        });
        return arr;
    }],
})

const instanceDB = axios.create({
    baseURL: 'http://localhost:3001/api/tempData/',
})

const instanceDay = axios.create({
    baseURL: 'http://localhost:3001/api/tempData/',
    responseType: 'text',
    transformResponse: [(responce) => {
        let arr = JSON.parse(responce)
        let resultArr: Array<ItemType> = arr.map((element: InitialStateType) => {
            return {
                name: element.time,
                t1: element.t1,
                t2: element.t2,
                t3: element.t3,
                t4: element.t4,
                t5: element.t5,
                t6: element.t6,
                t7: element.t7,
                t8: element.t8,
                t9: element.t9,
                t10: element.t10,
                t11: element.t11,
                t12: element.t12
            }
        });
        return resultArr
    }],
})

export const getData = () => {
    return (instance.get('').then(responce => responce.data))
};
export const getDataOfDay = (day: string) => {
    return (instanceDay.get(`${day}`).then(responce => responce.data))
};

export const sendData = (data: InitialStateType) => {
    return (instanceDB.post('', { ...data }).then(responce => responce.status))
};
