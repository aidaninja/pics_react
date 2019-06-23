import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID d20d068a804b425216c586d5cf118da630d75f646bbadae67abdbb41fe1e5139'
    }
});