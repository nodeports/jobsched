import { Queue, Worker, QueueEvents } from "bullmq";
import { redisOptions } from "./database";

export const myQueue = new Queue("myQueue", { connection: redisOptions });

export const myWorker = new Worker(
  "myQueue",
  async (job) => {
    console.log(
      `Processing job ${job.id} with data ${JSON.stringify(job.data)}`
    );
  },
  { connection: redisOptions }
);

const queueEvents = new QueueEvents("myQueue", { connection: redisOptions });

queueEvents.on("completed", ({ jobId }) => {
  console.log(`Job ${jobId} has completed`);
});

queueEvents.on("failed", ({ jobId, failedReason }) => {
  console.log(`Job ${jobId} has failed with reason ${failedReason}`);
});
