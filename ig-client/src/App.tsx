import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { UIProvider } from "./contexts/UIContext";
import { InstagramRouter } from "./router/InstagramRouter";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UIProvider>
          <InstagramRouter></InstagramRouter>
        </UIProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
