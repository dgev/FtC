import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

const drawerWidth = 100;
const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage:'url("https://images.pexels.com/photos/1600139/pexels-photo-1600139.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")',
    height: "100%",
    backgroundSize: "contain",
    backgroundPosition:"center",
    color:" #fffde7",
    fontFamily: '"Comic Sans"',
    fontSize:"20px",
    display: "flex",
    padding:"15px",
  },
  hFour:{
    fontFamily:  '"Apple Color Emoji"',
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 1,
    },
  },
  appBar: {
    backgroundColor: "#FAFAFA",
  },


  picCon:{
  backgroundImage:'url("https://www.dramalearningcenter.com/wp-content/uploads/2018/01/Alex.png")',
  backgroundRepeat:"no-repeat",
  display:'flex',
  backgroundPosition:"center",
  height:"80%",


  },
  picConTwo:{
    height:"100%",
    backgroundImage:'url("https://vignette.wikia.nocookie.net/scratchpad-iii/images/3/3f/Melman.png/revision/latest?cb=20181225155402")',
    backgroundRepeat:"no-repeat" ,
    backgroundPosition:"right",
    display:'flex',
    },

    picConThree:{
      backgroundImage:'url("https://i.ya-webdesign.com/images/drawing-hippopotamus-zebra-madagascar-15.png")',
      backgroundRepeat:"no-repeat" ,
      display:'flex',
      backgroundPosition:"center",
      height:"80%",
      },

      picConFour:{
        backgroundImage:'url("https://www.sossupport.net/wp-content/uploads/2015/08/gloria_action.png")',
        backgroundRrepeat:"no-repeat" ,
      
        padding:"100px",
        display:'flex',
        backgroundPosition:"center",
        backgroundSize: "cover"
        },
  

  marginTop: {
    marginTop: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(6),
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: { main: "#4CAF50" },
  },
});
export { useStyles, theme };
