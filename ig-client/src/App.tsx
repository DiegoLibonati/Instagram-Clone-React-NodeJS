import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProfileProvider } from "./contexts/ProfileContext";
import { PublicationProvider } from "./contexts/PublicationContext";
import { SearchProvider } from "./contexts/SearchContext";
import { UIProvider } from "./contexts/UIContext";
import { InstagramRouter } from "./router/InstagramRouter";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UIProvider>
          <ProfileProvider>
            <PublicationProvider>
              <SearchProvider>
                <InstagramRouter></InstagramRouter>
              </SearchProvider>
            </PublicationProvider>
          </ProfileProvider>
        </UIProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
