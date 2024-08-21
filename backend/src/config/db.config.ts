import mongoose from 'mongoose';
import environment from './environment';

const mongoString = environment['DATABASE_URL'];

export const Connect = async () => {
    try {
        await mongoose.connect(mongoString);
        console.log('Database Connected');
    } catch (error) {
        console.log(error);
    }
}