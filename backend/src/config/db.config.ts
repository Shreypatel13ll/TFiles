import mongoose from 'mongoose';
import environment from './environment';

const mongoString = environment['DATABASE_URL'];

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

export default database;