import { Router } from "express";
import { addJob } from "../jobs/bullmq";
import { agenda } from "../config/agenda";

const router = Router();

router.post("/add-bullmq-job", async (req, res) => {
  const { name, data } = req.body;
  await addJob(name, data);
  res.status(200).send("Job added to BullMQ");
});

router.post("/add-agenda-job", async (req, res) => {
  const { name, data, schedule } = req.body;
  await agenda.schedule(schedule, name, data);
  res.status(200).send("Job added to Agenda");
});

export { router };
