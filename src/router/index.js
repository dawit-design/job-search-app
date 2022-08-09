import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView"
import JobResultsView from "@/views/JobResultsView"
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/job/results",
    name: "Job",
    component: JobResultsView,
  }
];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
