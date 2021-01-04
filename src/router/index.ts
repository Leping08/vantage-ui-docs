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
      import(
        /* webpackChunkName: "checkBox" */ "../views/docs/form/CheckBox.vue"
      )
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
      import(/* webpackChunkName: "card" */ "../views/docs/form/Button.vue")
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
  },
  {
    path: "/toggle",
    name: "toggle",
    text: "Toggle",
    searchable: true,
    component: () =>
      import(/* webpackChunkName: "toggle" */ "../views/docs/form/Toggle.vue")
  },
  {
    path: "/radio",
    name: "radio",
    text: "Radio",
    searchable: true,
    component: () =>
      import(/* webpackChunkName: "radio" */ "../views/docs/form/Radio.vue")
  },
  {
    path: "/input",
    name: "input",
    text: "Input",
    searchable: true,
    component: () =>
      import(/* webpackChunkName: "input" */ "../views/docs/form/Input.vue")
  },
  {
    path: "/ping",
    name: "ping",
    text: "Ping",
    searchable: true,
    component: () =>
      import(/* webpackChunkName: "ping" */ "../views/docs/Ping.vue")
  },
  {
    path: "/progress-bar",
    name: "progress-bar",
    text: "Progress Bar",
    searchable: true,
    component: () =>
      import(
        /* webpackChunkName: "progress-bar" */ "../views/docs/ProgressBar.vue"
      )
  },
  {
    path: "/progress-spinner",
    name: "progress-spinner",
    text: "Progress Spinner",
    searchable: true,
    component: () =>
      import(
        /* webpackChunkName: "progress-spinner" */ "../views/docs/ProgressSpinner.vue"
      )
  },
  {
    path: "/stats",
    name: "stats",
    text: "Stats",
    searchable: true,
    component: () =>
      import(/* webpackChunkName: "stats" */ "../views/docs/Stats.vue")
  },
  {
    path: "/tabs",
    name: "tabs",
    text: "Tabs",
    searchable: true,
    component: () =>
      import(/* webpackChunkName: "tabs" */ "../views/docs/Tabs.vue")
  },
  {
    path: "/data-table",
    name: "data-table",
    text: "Data Table",
    searchable: true,
    component: () =>
      import(/* webpackChunkName: "data-table" */ "../views/docs/DataTable.vue")
  },
  {
    path: "/search-select",
    name: "search-select",
    text: "Search Select",
    searchable: true,
    component: () =>
      import(
        /* webpackChunkName: "search-select" */ "../views/docs/form/SearchSelect.vue"
      )
  },
  {
    path: "/date-range-picker",
    name: "date-range-picker",
    text: "Date Range picker",
    searchable: true,
    component: () =>
      import(
        /* webpackChunkName: "date-range-picker" */ "../views/docs/form/DateRangePicker.vue"
      )
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
export { routes };
