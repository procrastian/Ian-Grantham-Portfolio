import Container from "@mui/material/Container";
import BasicAccordion from "../Accordion/Accordion.js";
import "./App.css";
import ButtonAppBar from "../AppBar/AppBar.js";

function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <Container maxWidth="sm">
        <BasicAccordion />
      </Container>
    </div>
  );
}

export default App;
