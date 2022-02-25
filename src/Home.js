import React from "react";
import {
  makeStyles,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core"; //importando o material-ui. Usar a documentação oficial
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VideoCall from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';

const useStyles = makeStyles((theme) => ({
  root: {
    /* background: theme.palette.primary.main, //Definido em app.js
        padding: theme.spacing(2), //8 pixels de espaçamento * 2 */
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
  },
  menuIcon:{
    paddingRight: theme.spacing(5),
  },
  icons:{
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  grow: {
    flexGrow: 1,
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            size="xx-large"
            color="inherit"
            aria-label="menu"
            className={classes.menuIcon}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} /> {/* Para colocar espaçamento */}
          <IconButton
            color="inherit"
            className={classes.icons}
          >
            <VideoCall />
          </IconButton>
          <IconButton
            startIcon={<AccountCircle />}
            size="xx-large"
            color="inherit"
            className={classes.icons}
            sx={{ mr: 2 }}
          >
            <AppsIcon />
          </IconButton>
          <IconButton
            startIcon={<AccountCircle />}
            size="xx-large"
            color="inherit"
            className={classes.icons}
            sx={{ mr: 2 }}
          >
            <MoreVert />
          </IconButton>


          
          <Button
            startIcon={<AccountCircle />}
            variant="outlined"
            color="secondary"
          >
            Fazer Login
          </Button>{" "}
          {/*Variant outlined é para a borda */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Home;
