import mongoose from "mongoose";
import ENV from '../config.js';

async function connect() {
    mongoose.set('strictQuery', true);
    try {
        // Connect to your local MongoDB server using the URI from your config file
        const db = await mongoose.connect(ENV.LOCAL_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database Connected");
        return db;
    } catch (error) {
        console.error("Database connection error:", error);
        throw error;
    }
}

export default connect;
