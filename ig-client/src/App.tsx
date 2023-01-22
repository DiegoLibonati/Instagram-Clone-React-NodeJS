import { BrowserRouter } from "react-router-dom";
import { InstagramRouter } from "./router/InstagramRouter";

function App() {
  return (
    <BrowserRouter>
      <InstagramRouter></InstagramRouter>
    </BrowserRouter>
  );
}

export default App;
