import { myQueue } from "../config/bullmq";

export const addJob = async (name: string, data: any) => {
  await myQueue.add(name, data);
};
