import HomePage from "views/HomePage/Home";
import SignUp from "views/HomePage/SignUp/components/SignUp";
import SignIn from "views/HomePage/Signin/Signin";
import Reset from "views/HomePage/Reset/Reset";

const homeRoutes = [
  {
    path: "/",
    name: "HomePage",
    // icon: Dashboard,
    component: HomePage,
    // layout: '/home',
  },
  {
    path: "/home",
    name: "HomePage",
    // icon: Dashboard,
    component: HomePage,
    // layout: '/home',
  },
  // {
  //   path: '/about',
  //   name: 'About Us',
  //   // icon: Dashboard,
  //   component: About,
  //   // layout: '/home',
  // },
  {
    path: "/signup",
    name: "HomePage",
    // icon: Dashboard,
    component: SignUp,
    // layout: '/home',
  },
  {
    path: "/signin",
    name: "HomePage",
    // icon: Dashboard,
    component: SignIn,
    // layout: '/home',
  },
  {
    path: "/reset",
    name: "Reset",
    // icon: Dashboard,
    component: Reset,
    // layout: '/home',
  },
];

export { homeRoutes };
