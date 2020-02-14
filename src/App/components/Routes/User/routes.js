// @material-ui/icons
import Person from '@material-ui/icons/Person';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import MyProfile from 'views/MyProfile';
import Projects from 'views/Projects';
import Companies from 'views/Companies';
// import App from 'App/App';

const dashboardRoutes = [
  {
    path: '/',
    name: 'My Profile',
    icon: Person,
    component: MyProfile,
    // layout: '/company',
  },
  {
    path: '/user',
    name: 'My Profile',
    icon: Person,
    component: MyProfile,
    // layout: '/company',
  },
  {
    path: '/projects',
    name: 'Projects',
    icon: 'content_paste',
    component: Projects,
    // layout: '/company',
  },
  {
    path: '/company',
    name: 'Companies',
    icon: LibraryBooks,
    component: Companies,
    // layout: '/company',
  },
];

export { dashboardRoutes };
