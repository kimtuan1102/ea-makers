import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/report",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/report",
          name: "report",
          component: () => import("@/view/pages/Reports.vue")
        },
        {
          path: "/config-ea",
          name: "config-ea",
          component: () => import("@/view/pages/ConfigEA.vue")
        }
      ]
    },
    {
      path: "/",
      component: () => import("@/view/pages/auth/Auth"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/Login")
        },
        {
          name: "register",
          path: "/register",
          component: () => import("@/view/pages/auth/Register")
        }
      ]
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-1.vue")
    }
  ]
});
