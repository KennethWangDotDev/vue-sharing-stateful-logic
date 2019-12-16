import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Composition from "../views/Composition/Composition.vue";
import ScopedSlot from "../views/ScopedSlot/ScopedSlot.vue";
import Mixin from "../views/Mixin/Mixin.vue";
import RenderProp from "../views/RenderProp/RenderProp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/composition",
    component: Composition
  },
  {
    path: "/scoped-slot",
    component: ScopedSlot
  },
  {
    path: "/mixin",
    component: Mixin
  },
  {
    path: "/render-prop",
    component: RenderProp
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
