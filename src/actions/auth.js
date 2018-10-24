import axios from 'axios';

import {ROOT_URL } from '../config';

export function signUp(fields, succes) {
    console.log(fields);
    return function(dispatch) {
        // axios.post(`${ROOT_URL}/signUp`, fields)
        //     .then(response => {
        //         // do something with response
        //     })
        //     .catch(err => {
        //         if(err) { console.log(err) }
        //     })
    }
}