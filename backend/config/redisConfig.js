const redis = require("redis");

const redisClient = redis.createClient({
  socket: {
    host: "localhost",
    port: 6379,
  }
});

redisClient.connect()
  .then(() => console.log("✅ Connected to Redis"))
  .catch(err => console.error("❌ Redis Connection Error:", err));

module.exports = redisClient;
