import mysql from 'mysql2/promise';
import appConfig from './env.js';


const connection = await mysql.createConnection({
    host: appConfig.MYSQL_CONFIG.MYSQL_HOST,
    user: appConfig.MYSQL_CONFIG.MYSQL_USER,
    database: appConfig.MYSQL_CONFIG.MYSQL_DB
});

export default connection;
