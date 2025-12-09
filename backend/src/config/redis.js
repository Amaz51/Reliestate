
const { createClient } = require("redis");
const dotenv = require("dotenv");

dotenv.config();

let client;
let isConnected = false;

const connectRedis = async () => {
    client = createClient({
        username: process.env.REDIS_USERNAME,
        password: process.env.REDIS_PASSWORD,
        socket: {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
        }
    });
    console.log("REDIS USER:", process.env.REDIS_USERNAME);
console.log("REDIS PASS:", process.env.REDIS_PASSWORD);


    client.on("error", (err) => console.error("❌ Redis Client Error:", err));
    client.on("connect", () => {
        console.log("🚀 Redis Connected Successfully");
        isConnected = true;
    });

    try {
        await client.connect();
    } catch (error) {
        console.error("❌ Redis Connection Failed:", error);
        throw error; // Let the caller handle the error
    }
};

// Function to get client, waiting for connection if necessary
const getRedisClient = async () => {
    if (!client) {
        await connectRedis();
    }
    if (!isConnected) {
        await new Promise((resolve) => {
            client.on('connect', resolve);
        });
    }
    return client;
};

module.exports = { connectRedis, getRedisClient };