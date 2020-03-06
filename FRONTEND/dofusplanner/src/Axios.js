import axios from 'axios'

const LOCAL_HOST_ROOT_API = 'http://127.0.0.1:8080';


const responseBody = res => res.body;


const axiosRequestBuilder = (API_URL, URL, METHOD) => {
    switch (METHOD) {
        case 'GET':
            return axios.get(`${API_URL}/${URL}`);
        default:
            return;
    }


};

const requests = {
    get: url =>
        axiosRequestBuilder(LOCAL_HOST_ROOT_API, url, 'GET')
};

const Equipment = {
    getAllByType: type =>
        requests.get(`equipment/${type}`)
};


export default {
    Equipment
}