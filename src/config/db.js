import mysql from 'mysql';
import appConfig from './env';

async function connectDb() {
    const connection = mysql.createConnection({
        host: appConfig.MYSQL_CONFIG.MYSQL_HOST,
        user: appConfig.MYSQL_CONFIG.MYSQL_USER,
        password: appConfig.MYSQL_CONFIG.MYSQL_PASSWORD,
        database: appConfig.MYSQL_CONFIG.MYSQL_DB
    });
    try {
        connection.connect();
        console.log('Connected to DB');
    } catch (error) {
        console.error('Unable to connect to DB: ', error);
    }
};

export default connectDb;
