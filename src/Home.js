import React from "react";
import {
  makeStyles,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  ListItem,
  Drawer,
  Grid,
  Hidden,
  ListSubheader,
  Switch,
} from "@material-ui/core"; //importando o material-ui. Usar a documentação oficial
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VideoCall from "@material-ui/icons/VideoCall";
import MoreVert from "@material-ui/icons/MoreVert";
import AppsIcon from "@material-ui/icons/Apps";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HistoryIcon from "@material-ui/icons/History";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import AddCircle from "@material-ui/icons/AddCircle";
import { DefaultTheme } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        background: theme.palette.background.default,
      },
  appBar: {
    boxShadow: "none",
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
  },
  logo: {
    height: 25,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    zIndex: -1,
    borderRight: "none",
  },
  icons: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
    fontweight: 500,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 1,
  },
  divider: {
    marginTop: 3,
  },
  subheader: {
    textTransform: "uppercase",
  },
}));

const videos = [
  {
    id: 1,
    title:
      "FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29",
    channel: "Duda Figueiredo",
    views: "11 mi de visualizações",
    date: "há 1 semana",
    avatar: "/imagens/avatar.jpg",
    thumb: "/imagens/thumb1.png",
  },
  {
    id: 2,
    title:
      "COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02",
    channel: "Duda Figueiredo",
    views: "957 mil visualizações",
    date: "há 1 semana",
    avatar: "/imagens/avatar.jpg",
    thumb: "/imagens/thumb2.png",
  },
  {
    id: 3,
    title:
      "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
    channel: "Duda Figueiredo",
    views: "106 mil visualizações",
    date: "há 1 semana",
    avatar: "/imagens/avatar.jpg",
    thumb: "/imagens/thumb3.png",
  },
  {
    id: 4,
    title:
      "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
    channel: "Duda Figueiredo",
    views: "5,6 mi de visualizações",
    date: "há 1 semana",
    avatar: "/imagens/avatar.jpg",
    thumb: "/imagens/thumb4.png",
  },
  {
    id: 5,
    title:
      "EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26",
    channel: "Duda Figueiredo",
    views: "2,2 mi de visualizações",
    date: "há 1 semana",
    avatar: "/imagens/avatar.jpg",
    thumb: "/imagens/thumb5.png",
  },
  {
    id: 6,
    title: "COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01",
    channel: "Duda Figueiredo",
    views: "233 mil visualizações",
    date: "há 1 semana",
    avatar: "/imagens/avatar.jpg",
    thumb: "/imagens/thumb6.png",
  },
  {
    id: 7,
    title:
      "PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01",
    channel: "Duda Figueiredo",
    views: "118 mil visualizações",
    date: "há 1 semana",
    avatar: "/imagens/avatar.jpg",
    thumb: "/imagens/thumb7.png",
  },
  {
    id: 8,
    title:
      "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
    channel: "Duda Figueiredo",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    avatar: "/imagens/avatar.jpg",
    thumb: "/imagens/thumb8.png",
  },
];

function Home({darkMode, setDarkMode}) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            className={classes.menuIcon}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={theme.palette.type === 'dark' ? "/imagens/branco.png" : "/imagens/preto.png"} alt="logo" className={classes.logo} />
          <div className={classes.grow} /> {/* Para colocar espaçamento */}
          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />
          <IconButton color="inherit" className={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton
            startIcon={<AccountCircle />}
            size="large"
            color="inherit"
            className={classes.icons}
            sx={{ mr: 2 }}
          >
            <AppsIcon />
          </IconButton>
          <IconButton
            startIcon={<AccountCircle />}
            size="large"
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
      <Box display="flex">
        <Hidden mdDown> {/*Esse hidden vai fazer o menu do lado sumir quando a tela diminuir */}
          <Drawer
            variant="permanent"
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <div className={classes.drawerContainer}>
                <List>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Início"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<ExploreIcon />}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Explorar"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<SlowMotionVideoIcon />}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Shorts"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Inscrições"}
                    />
                  </ListItem>
                </List>

                <Divider classes={{ root: classes.divider }} />
                <List>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Biblioteca"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Histórico"}
                    />
                  </ListItem>
                </List>
                <Divider classes={{ root: classes.divider }} />
                <Box p={7} marginTop={-2}>
                  <Box marginBottom={3}>
                    <Typography variant="body2">
                      Faça login para curtir vídeos, comentar e se inscrever.
                    </Typography>
                  </Box>
                  <Button
                    startIcon={<AccountCircle />}
                    variant="outlined"
                    color="secondary"
                  >
                    Fazer Login
                  </Button>
                </Box>
                <Divider classes={{ root: classes.divider }} />
                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader
                      component="div"
                      id="nested-list-subheader"
                      className={classes.subheader}
                    >
                      O Melhor do youtube
                    </ListSubheader>
                  }
                >
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Música"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Esportes"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Jogos"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Filmes"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Notícias"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Ao vivo"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Aprender"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Vídeos do momento"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Videos em 360°"}
                    />
                  </ListItem>
                </List>
                <Divider classes={{ root: classes.divider }} />
                <Box marginTop={4}>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Procurar mais"}
                    />
                  </ListItem>
                </Box>
              </div>
            </Box>
          </Drawer>
        </Hidden>
        <Divider classes={{ root: classes.divider }} />
        <Box p={8} mt={-15}>
          <Toolbar />
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={4}> {/*Spacing para espaçamento */}
            {" "}
            {/*Grid é para high flexibility, funcionando para diferentes dispositivos (breakpoints)*/}
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                {" "}
                {/*Se for uma tela bem pequena, será 1 video por linha (xs(12)), ocupando as 12 posições. Se for uma tela maior, dois videos por linha, cada video ocupando espaço de 6 */}
                <Box>
                  <img
                    style={{ width: "100%" }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box display='flex'>
                    <img
                      style={{ width: "15%", height:'15%' ,borderRadius: "50%" }}
                      src={item.avatar}
                    />

                    <Box>
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant="body1"
                        color="textPrimary"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        display="block"
                        variant="body2"
                        color="textSecondary"
                      >
                        {item.channel}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {`${item.views} • ${item.date}`}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
