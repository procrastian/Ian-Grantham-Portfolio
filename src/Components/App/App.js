import Container from "@mui/material/Container";
import BasicAccordion from "../Accordion/Accordion.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <BasicAccordion />
      </Container>
    </div>
  );
}

export default App;
