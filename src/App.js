import React from 'react';
import { Button, ThemeProvider, createMuiTheme} from '@material-ui/core'; //importando o material-ui. Usar a documentação oficial

function App() {
  const theme = createMuiTheme({
    pallete:{ //Para saber quais propriedades posso usar tem na documentação -> palette, spacing, z-index
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#f5f5f5'
      }
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">Hello</Button> {/* rederizando o botão do material ui */}
    </ThemeProvider>
  );
}

export default App;

