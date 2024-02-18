import express from 'express';
import Connection from './db.js';
import cors from 'cors'; 
import bodyParser from 'body-parser';
// import { getHelloMessage } from './function.js';
import { checkCredentials, editCredentials, getHelloMessage,getUserDetails, postUserInfo, updateCredentials } from './controller.js';
// import UserModel from "./schema.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Sample route
app.post('/', getHelloMessage);
app.get('/users', getUserDetails);
app.post('/register', postUserInfo);
app.post('/login', checkCredentials);
app.post('/fetch', editCredentials);
app.post('/update', updateCredentials);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
Connection()