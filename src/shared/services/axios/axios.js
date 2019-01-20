import axios from 'axios';

const makeNetworkCall = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

export default makeNetworkCall;