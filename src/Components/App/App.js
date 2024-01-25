import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import BasicTabs from "../projectTabs/projectTabs.js"

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
        <BasicTabs/>
        <div className="blackoutLayer"></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
