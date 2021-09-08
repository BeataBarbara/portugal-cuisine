import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/sweets",
        name: "Sweets",
        component: () =>
            import ("../views/Sweets.vue"),
    },
    {
        path: "/drinks",
        name: "Drinks",
        component: () =>
            import ("../views/Drinks.vue"),
    },
    {
        path: "/maincourses",
        name: "Maincourses",
        component: () =>
            import ("../views/Maincourses.vue"),
    },
    {
        path: "/snacks",
        name: "Snacks",
        component: () =>
            import ("../views/Snacks.vue"),
    },
    {
        path: "/maincourses",
        name: "Maincourses",
        component: () =>
            import ("../views/Maincourses.vue"),
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;