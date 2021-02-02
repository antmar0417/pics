import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID rz1sOP9m_lUkfn_RWgGzR7KwkugLex27v-Kscv3i8m0'
    }
});