import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import DrawerComponent from "./DrawerComponent"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    marginRight: theme.spacing(10),
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "10px",
    marginLeft: theme.spacing(3),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  }
}))

const Navbar = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true })
  return (
    <AppBar>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h6" className={classes.logo}>
          MyCompany.com
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="#" className={classes.link}>
              THE EDIT
            </Link>
            <Link to="#" className={classes.link}>
              NEW ARRIVALS
            </Link>
            <Link to="#" className={classes.link}>
              DESIGNERS
            </Link>
            <Link to="#" className={classes.link}>
              CLOTHING
            </Link>
            <Link to="#" className={classes.link}>
              SHOES
            </Link>
            <Link to="#" className={classes.link}>
              BAGS
            </Link>
            <Link to="#" className={classes.link}>
              ACCESSORIES
            </Link>
            <Link to="#" className={classes.link}>
              JEWELRY
            </Link>
            <Link to="#" className={classes.link}>
              BEAUTY
            </Link>
            <Link to="#" className={classes.link}>
              HOME
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
