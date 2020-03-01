import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import MyProfile from "views/MyProfile/Profile";
import Companies from "views/Products/Company";

const dashboardRoutes = [
  {
    path: "/",
    name: "My Profile",
    icon: Person,
    component: MyProfile,
  },

  {
    path: "/product",
    name: "Products",
    icon: LibraryBooks,
    component: Companies,
  },
];

export { dashboardRoutes };
