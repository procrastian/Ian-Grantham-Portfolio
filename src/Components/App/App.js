import Container from "@mui/material/Container";
import BasicAccordion from "../Accordion/Accordion.js";
import "./App.css";
import ButtonAppBar from "../AppBar/AppBar.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Background from "../Background/Background.js";

const theme = createTheme({
  palette: {
    // mode: "dark"
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Background />
        <ButtonAppBar></ButtonAppBar>
        <Container maxWidth="sm">
          <BasicAccordion />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
