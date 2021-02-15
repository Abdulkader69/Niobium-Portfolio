import axios from 'axios';
import config from '../config/config';

export const getPosts = async () => {
    try {
        const posts = await axios.get(`${config.apiEndPoint}posts`);
        const data = posts.data
        return data;
    } catch (error) {
        return false;
    }
}
export default { getPosts };
