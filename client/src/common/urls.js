import config from '../../../config.js';
const IS_PROD = process.env.NODE_ENV === 'production';

export const baseUrl = IS_PROD ? config.API_URL : '';
