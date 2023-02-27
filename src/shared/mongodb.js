//step-1 import the mongoose module
const mongoose = require('mongoose')

//step-2 specify the url with your database name
const CONNECT_URL = `mongodb://127.0.0.1:27017/student`

//step-3 establish connection
class connection{
    connectDb = () => {
        console.log("Starded")
        mongoose.connect(CONNECT_URL, { useNewUrlParser: true })
         
        //mongoose is module which will emit the event connection is method and on is eventListner
        //connected and disconnecting  is predefined 
        mongoose.connection.on('connected', () => {
            console.log(`Connected to MongoDB(${CONNECT_URL}) Successfully on ${new Date()}`);
        });
        mongoose.connection.on('disconnecting', () => {
            console.log(`MongoDB(${CONNECT_URL}) connection successfully disconnecting on ${new Date()}`);
        });
        mongoose.connection.on('reconnected', () => {
            console.log(`MongoDB(${CONNECT_URL}) connection successfully reconnected on ${new Date()}`);
        });
        mongoose.connection.on('disconnected', (error) => {
            console.log(`MongoDB(${CONNECT_URL}) connection disconnected on ${new Date()}`, error);
        });
        mongoose.connection.on('error', (error) => {
            console.log(`Error connecting to MongoDB(${CONNECT_URL}) on ${new Date()}`, error);
        });
    };
}

//step-4 exporting object
module.exports = new connection()