import express from "express";
import { router } from "./routes";
import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { ExpressAdapter } from "@bull-board/express";
import { myQueue } from "./config/bullmq";
import { agenda } from "./config/agenda";

const app = express();
app.use("/admin", router);

app.use(express.json());

const serverAdapter = new ExpressAdapter();
createBullBoard({
  queues: [new BullMQAdapter(myQueue)],
  serverAdapter: serverAdapter,
});
serverAdapter.setBasePath("/admin/queues");
app.use("/admin/queues", serverAdapter.getRouter());

app.use("/admin/agenda", async () => {
  const { default: Agendash } = await import("agendash");

  return Agendash(agenda);
});

export default app;
