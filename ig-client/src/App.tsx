import { BrowserRouter } from "react-router-dom";
import { UIProvider } from "./contexts/UIContext";
import { InstagramRouter } from "./router/InstagramRouter";

function App() {
  return (
    <BrowserRouter>
      <UIProvider>
        <InstagramRouter></InstagramRouter>
      </UIProvider>
    </BrowserRouter>
  );
}

export default App;
