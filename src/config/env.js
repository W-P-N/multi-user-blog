import dotenv from 'dotenv';

dotenv.config();

const appConfig = {
    PORT: process.env.PORT || 3000,
    APP_BASE_URL: process.env.APP_BASE_URL || `http://127.0.0.1:${process.env.PORT}`,
    MYSQL_CONFIG: {
        MYSQL_HOST: process.env.MYSQL_HOST || 'localhost',
        MYSQL_USER: process.env.MYSQL_USER || 'root@localhost',
        MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || '',
        MYSQL_DB: process.env.MYSQL_DB || 'blog'
    }
};

export default appConfig;