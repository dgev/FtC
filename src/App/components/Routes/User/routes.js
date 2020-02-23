// @material-ui/icons
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import MyProfile from "views/MyProfile";
import Companies from "views/Companies";
// import App from 'App/App';

const dashboardRoutes = [
  {
    path: "/",
    name: "My Profile",
    icon: Person,
    component: MyProfile,
  },

  {
    path: "/company",
    name: "Companies",
    icon: LibraryBooks,
    component: Companies,
  },
];

export { dashboardRoutes };
