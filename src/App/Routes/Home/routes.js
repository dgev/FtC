import HomePage from "views/HomePage/Home/Main";
import SignUp from "views/HomePage/Register/SignUp/components/SignUp";
import SignIn from "views/HomePage/Register/Signin";
import Reset from "views/HomePage/Register/Reset";
import AboutUs from "views/HomePage/Home/About/About";

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
