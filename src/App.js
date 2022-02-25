import React from 'react';
import { Button, ThemeProvider, createMuiTheme, makeStyles} from '@material-ui/core'; //importando o material-ui. Usar a documentação oficial
import Home from './Home';


const useStyles = makeStyles({ //O objeto será todas as classes de estilo que quero usar nesse arquivo
  root:{
  },
});

function App() {
  const theme = createMuiTheme({
    spacing: 4,
    palette:{ //Para saber quais propriedades posso usar tem na documentação -> palette, spacing, z-index
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3f51b5'
      }
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;

