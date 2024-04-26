import Agenda from "agenda";
import { mongoUri } from "./database";

export const agenda = new Agenda({ db: { address: mongoUri } });

agenda.define("sendEmail", async (job) => {
  const { to, subject, body } = job.attrs.data;
  console.log(`Sending email to ${to} with subject: ${subject}`);
});

(async function () {
  await agenda.start();
  console.log("Agenda started");
})();
