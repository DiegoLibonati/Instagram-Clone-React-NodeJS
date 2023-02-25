import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProfileProvider } from "./contexts/ProfileContext";
import { UIProvider } from "./contexts/UIContext";
import { InstagramRouter } from "./router/InstagramRouter";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UIProvider>
          <ProfileProvider>
            <InstagramRouter></InstagramRouter>
          </ProfileProvider>
        </UIProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
