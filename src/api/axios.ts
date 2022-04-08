import axios from "axios";

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
debugger
export const getData = instance.get('').then(responce => responce.data);
