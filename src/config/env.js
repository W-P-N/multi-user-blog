import dotenv from 'dotenv';

dotenv.config();

const appConfig = {
    PORT: parseInt(process.env.PORT) || 3000,
    APP_BASE_URL: process.env.APP_BASE_URL || `http://127.0.0.1:${parseInt(process.env.PORT)}`,
    MYSQL_CONFIG: {
        MYSQL_HOST: process.env.MYSQL_HOST || '127.0.0.1',
        MYSQL_USER: process.env.MYSQL_USER || 'root',
        MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || '',
        MYSQL_DB: process.env.MYSQL_DB || 'blog',
        MYSQL_PORT: parseInt(process.env.MYSQL_PORT )|| 3306
    }
};

export default appConfig;