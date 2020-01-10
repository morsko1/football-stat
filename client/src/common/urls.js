const IS_PROD = process.env.NODE_ENV === 'production';

export const baseUrl = IS_PROD ? process.env.API_URL : '';
