import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
        <div className="blackoutLayer"></div>
      
      </div>
    </ThemeProvider>
  );
}

export default App;
