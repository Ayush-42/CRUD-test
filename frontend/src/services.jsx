import axios from 'axios'

const url ='http://localhost:5000/'

export function fetchUserInfo(param){
    return axios.post(`${url}fetch`, param)
}

