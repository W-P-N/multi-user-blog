import mysql from 'mysql2/promise';
import appConfig from './env.js';

const connection = await mysql.createConnection({
    host: appConfig.MYSQL_CONFIG.MYSQL_HOST,
    user: appConfig.MYSQL_CONFIG.MYSQL_USER,
    database: appConfig.MYSQL_CONFIG.MYSQL_DB,
    password: appConfig.MYSQL_CONFIG.MYSQL_PASSWORD,
    port: appConfig.MYSQL_CONFIG.MYSQL_PORT
});

connection.connect();
console.log("MySQL Server Connected.");

export default connection;
