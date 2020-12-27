import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    text: "Home",
    searchable: false,
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/installation",
    name: "installation",
    text: "Installation",
    searchable: true,
    component: () =>
      import(/* webpackChunkName: "installation" */ "../views/Installation.vue")
  },
  {
    path: "/card",
    name: "card",
    text: "Card",
    searchable: true,
    component: () =>
      import(/* webpackChunkName: "card" */ "../views/docs/Card.vue")
  },
  {
    path: "/countdown",
    name: "countdown",
    text: "Countdown",
    searchable: true,
    component: () =>
      import(/* webpackChunkName: "countdown" */ "../views/docs/Countdown.vue")
  },
  {
    path: "/avatar",
    name: "avatar",
    text: "Avatar",
    searchable: true,
    component: () =>
      import(/* webpackChunkName: "avatar" */ "../views/docs/Avatar.vue")
  },
  {
    path: "/checkbox",
    name: "checkbox",
    text: "Checkbox",
    searchable: true,
    component: () =>
      import(/* webpackChunkName: "checkBox" */ "../views/docs/CheckBox.vue")
  },
  {
    path: "/badge",
    name: "badge",
    text: "Badge",
    searchable: true,
    component: () =>
      import(/* webpackChunkName: "badge" */ "../views/docs/Badge.vue")
  },
  {
    path: "/button",
    name: "button",
    text: "Button",
    searchable: true,
    component: () =>
      import(/* webpackChunkName: "card" */ "../views/docs/Button.vue")
  },
  {
    path: "/description-list",
    name: "description-list",
    text: "Description List",
    searchable: true,
    component: () =>
      import(
        /* webpackChunkName: "description-list" */ "../views/docs/DescriptionList.vue"
      )
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
export { routes };
