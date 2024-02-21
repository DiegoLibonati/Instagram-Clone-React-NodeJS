import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth/AuthContext";
import { ExploreProvider } from "./contexts/Explore/ExploreContext";
import { FeedProvider } from "./contexts/Feed/FeedContext";
import { NotificationsProvider } from "./contexts/Notifications/NotificationsContext";
import { ProfileProvider } from "./contexts/Profile/ProfileContext";
import { PublicationProvider } from "./contexts/Publications/PublicationContext";
import { SearchProvider } from "./contexts/Search/SearchContext";
import { SuggestionProvider } from "./contexts/Suggestion/SuggestionContext";
import { UIProvider } from "./contexts/Ui/UIContext";
import { InstagramRouter } from "./router/InstagramRouter";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UIProvider>
          <ProfileProvider>
            <PublicationProvider>
              <SearchProvider>
                <NotificationsProvider>
                  <FeedProvider>
                    <SuggestionProvider>
                      <ExploreProvider>
                        <InstagramRouter></InstagramRouter>
                      </ExploreProvider>
                    </SuggestionProvider>
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
