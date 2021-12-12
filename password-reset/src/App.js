import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Short URL";
  }, []);
  return <Main />;
}

export default App;
