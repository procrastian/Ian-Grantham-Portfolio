// import Container from "@mui/material/Container";
// import BasicAccordion from "../Accordion/Accordion.js";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import BackgroundImage from "../Background/Background.js";

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
        {/* <BackgroundImage/> */}
        <div class="el"></div>
        {/* <Container
          maxWidth="sm"
          className="content"
          zIndex
          sx={{ zIndex: "content", position: "absolute", display: "flex" }}
        > */}
          {/* <BasicAccordion /> */}
        {/* </Container> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
