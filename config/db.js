import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config();

console.log(process.env.DB_CONN)
mongoose.connect(process.env.DB_CONN);
mongoose.set("debug", true);

const db = mongoose.connection;

db.on("connected", function () {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
