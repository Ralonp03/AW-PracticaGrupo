import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import HomeVisitante from "../views/HomeVisitante.vue";
import Login from "../views/Login.vue";
// import Register from "../components/Register/Register.vue";
import BuyCard from "../views/BuyCard.vue";
import Collections from "../views/Collections.vue";
import Information from "../views/Information.vue";
const routes = [
  {
    path: "/",
    name: "HomeVisitante",
    component: HomeVisitante,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  //{
  //  path: "/register",
  //  name: "Register",
  //  component: Register,
  //},
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/buyCard",
    name: "BuyCard",
    component: BuyCard,
  },
  {
    path: "/collections",
    name: "Collections",
    component: Collections,
  },
  {
    path: "/information",
    name: "Information",
    component: Information,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
