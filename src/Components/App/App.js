import Container from "@mui/material/Container";
import BasicAccordion from "../Accordion/Accordion.js";
import "./App.css";
// import ButtonAppBar from "../AppBar/AppBar.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Background from "../Background/Background.js";
import { Box } from "@mui/material";

const theme = createTheme({
  palette: {
    // mode: "dark"
  },
  zIndex: {
    pattern: 1050,
    content: 1000,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Background zIndex sx={{zIndex: "pattern", position: 'absolute'}}>

        </Background>
        {/* <ButtonAppBar></ButtonAppBar> */}
        <Container
          maxWidth="sm"
          className="content"
          zIndex
          sx={{ zIndex: "content", position: "absolute", display: "flex" }}
        >
          <BasicAccordion />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
