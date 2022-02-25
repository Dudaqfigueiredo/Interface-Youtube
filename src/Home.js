import React from 'react'
import { makeStyles } from '@material-ui/core'; //importando o material-ui. Usar a documentação oficial


const useStyles = makeStyles((theme) => ({ 
    root:{
        background: theme.palette.primary.main, //Definido em app.js
        padding: theme.spacing(2), //8 pixels de espaçamento * 2
        height: '100vh'
    }
  }));


function Home() {
    const classes = useStyles();
  return (
    <div className={classes.root}>Home</div>
  )
}

export default Home;
