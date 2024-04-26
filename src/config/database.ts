export const redisOptions = {
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT, 10),
};

export const mongoUri = process.env.MONGO_URI;
