import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { NotificationsProvider } from "./contexts/NotificationsContext";
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
                <NotificationsProvider>
                  <InstagramRouter></InstagramRouter>
                </NotificationsProvider>
              </SearchProvider>
            </PublicationProvider>
          </ProfileProvider>
        </UIProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
