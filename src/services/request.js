import axios from 'axios';

import { store } from '../../store';
import { closeSection } from '../../store/actionCreators/auth';

export default (method, url, data) => {
    
    const state = store.getState();
    const token = state.auth && state.auth.token;

    return axios({
        method,
        url,
        data,
        headers:{
            'Authorization': token
        },
        responseType: 'json',
        transformResponse: [
            res => {
                if(res.code===401 && token) store.dispatch( closeSection() );

                return res;
            }
        ],
    });
}

