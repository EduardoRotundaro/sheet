import makeRequest from '../request';
import { API_URL } from '../../constants/app';

export const authenticate = () => makeRequest('post', `${API_URL}...`);
