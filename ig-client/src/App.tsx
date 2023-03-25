import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth/AuthContext";
import { FeedProvider } from "./contexts/Feed/FeedContext";
import { NotificationsProvider } from "./contexts/Notifications/NotificationsContext";
import { ProfileProvider } from "./contexts/Profile/ProfileContext";
import { PublicationProvider } from "./contexts/Publications/PublicationContext";
import { SearchProvider } from "./contexts/Search/SearchContext";
import { UIProvider } from "./contexts/Ui/UIContext";

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
                  <FeedProvider>
                    <InstagramRouter></InstagramRouter>
                  </FeedProvider>
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
