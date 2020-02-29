import HomePage from "views/HomePage/Home";
import SignUp from "views/HomePage/SignUp/components/SignUp";
import SignIn from "views/HomePage/Signin/Signin";
import Reset from "views/HomePage/Reset/Reset";
import AboutUs from "views/HomePage/AboutUs";

const homeRoutes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About Us",
    component: AboutUs,
  },
  {
    path: "/signup",
    name: "HomePage",
    component: SignUp,
  },
  {
    path: "/signin",
    name: "HomePage",
    component: SignIn,
  },
  {
    path: "/reset",
    name: "Reset",
    component: Reset,
  },
];

export { homeRoutes };
