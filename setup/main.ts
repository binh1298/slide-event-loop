import { defineAppSetup } from "@slidev/types";
import VueRouter from "vue-router";

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(VueRouter);
});
