import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6e5929d0f300af64a0468b12a374b6a03b6d550b28021d268c965d9e44adfa46'
    }
});