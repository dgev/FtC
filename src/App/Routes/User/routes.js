import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import SettingsIcon from "@material-ui/icons/Settings";
import MyProfile from "views/MyProfile/Profile";
import Companies from "views/Products/Company";
import Reset from "views/Reset";
import AllProducts from "views/Products/AllProducts";

const dashboardRoutes = [
  {
    path: "/",
    name: "My Profile",
    icon: Person,
    component: MyProfile,
  },
  {
    path: "/myproducts",
    name: "My Products",
    icon: LibraryBooks,
    component: Companies,
  },
  {
    path: "/products",
    name: "Products",
    icon: LocalGroceryStoreIcon,
    component: AllProducts,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: SettingsIcon,
    component: Reset,
  },
];

export { dashboardRoutes };
