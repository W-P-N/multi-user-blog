import mysql from 'mysql2/promise';
import appConfig from './env.js';
import sleepFunction from '../helpers/sleepFunction.js';

const mySqlConfig = {
    host: appConfig.MYSQL_CONFIG.MYSQL_HOST,
    user: appConfig.MYSQL_CONFIG.MYSQL_USER,
    database: appConfig.MYSQL_CONFIG.MYSQL_DB,
    password: appConfig.MYSQL_CONFIG.MYSQL_PASSWORD,
    port: appConfig.MYSQL_CONFIG.MYSQL_PORT
};

async function retryConnection() {
    const retries = appConfig.MYSQL_CONFIG.MYSQL_RETRY;
    for(let i=0; i<retries; ++i) {
        try {
            const connection = await mysql.createConnection(mySqlConfig);
            return connection;
        } catch (error) {
            console.log(`Retry ${i+1} failed: ${error}`);
            await sleepFunction(2000);
        }
    };
    console.log('Unable to connect to db after retries. Please check the log.');
    return;
}

async function connectDb() {
    try {
        const connection = await mysql.createConnection(mySqlConfig);
        console.log('Database connected');
        return connection;
    } catch (error) {
        console.log(`Unable to connect to the database: ${error} \nRetrying...`);
        return retryConnection();
        return;
    };
};


const connection = await connectDb();

export default connection;
