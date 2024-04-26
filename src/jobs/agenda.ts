import { agenda } from "../config/agenda";

agenda.define("dailyReport", async (job) => {
  console.log("Generating daily report...");
  // Report generation logic
});

(async function () {
  await agenda.start();
  await agenda.every("24 hours", "dailyReport");
})();
