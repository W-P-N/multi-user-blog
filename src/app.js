import express from 'express';
import cors from 'cors';

const blogApp = express();
blogApp.use(express.json());
blogApp.use(cors());

export default blogApp;


