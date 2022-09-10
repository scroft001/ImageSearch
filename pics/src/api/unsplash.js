import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID W-rl_3ddy9rtjyx-ASZud7lSO3nAqtNwgSqflaSK4P4'
    }
});