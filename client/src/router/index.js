import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import HomeVisitante from "../views/HomeVisitante.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import BuyCard from "../views/BuyCard.vue";
import MyCollections from "../views/MyCollections.vue";
import AdminHome from "../views/Admin/AdminHome.vue";
import cardsEdit from "../views/Admin/cardsEdit.vue"
import colectionEdit from "../views/Admin/colectionEdit.vue"
import event from "../views/Events.vue";

const routes = [
  {
    path: "/",
    name: "HomeVisitante",
    component: HomeVisitante,
  },
  {
    path: "/dashboard",
    name: "AdminHome",
    component: AdminHome,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
   path: "/register",
   name: "Register",
   component: Register,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/comprar",
    name: "BuyCard",
    component: BuyCard,
  },
  {
    path: "/mycollections",
    name: "MyCollections",
    component: MyCollections,
  },
  {
    path: "/edit/collections",
    name: "colectionEdit",
    component: colectionEdit,
  },
  {
    path: "/edit/cards",
    name: "cardsEdit",
    component: cardsEdit,
  },
  {
    path: "/events",
    name: "Events",
    component: event,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
