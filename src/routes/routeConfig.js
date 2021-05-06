import * as Page from "../pages";

const routes = [
    {
      path: "/main",
      exact: true,
      component: Page.Main
    },
    {
      path: "/about",
      exact: true,
      component: Page.About,
    },
    {
        path: "/login",
        exact: true,
        component: Page.Login
    },
    {
      path: "/",
      exact: true,
      component: Page.Login
  }
];

export default routes;