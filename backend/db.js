
import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `mongodb+srv://ayush123:ayush123@cluster0.c6zmipa.mongodb.net/`

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

// sudo systemctl start uac_manager.service
// sudo systemctl stop uac_manager.service

export default Connection;