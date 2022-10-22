import * as Page from "../pages";

const routes = [
    {
        path: "/main",
        exact: true,
        auth: true,
        component: Page.Main
    },
    {
        path: "/about",
        exact: true,
        auth: true,
        component: Page.About,
    }
];

export default routes;