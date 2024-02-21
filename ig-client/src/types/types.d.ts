// UI
export type MAlert = {
  isOpen: boolean;
  type: string;
  title: string;
  message: string;
  color: string;
};

export type Modal = {
  isOpen: boolean;
  type: string;
};

export type MConfig = {
  isOpen: boolean;
};

// Comment
export type Comment = {
  id: string;
  _id?: string;
  username: string;
  avatar: string;
  name: string;
  description: string;
  date: string;
  idPost: string;
  idAuthor: string;
};

// Follow
export type Follow = {
  id: string;
  _id?: string;
  name: string;
  username: string;
  avatar: string;
  idProfile: string;
  idFollower: string;
};

// Like
export type Like = {
  id?: string;
  _id?: string;
  name: string;
  username: string;
  avatar: string;
  idPost: string;
  idAuthor: string;
};

// Notification
export type Notification = {
  id: string;
  _id?: string;
  name: string;
  username: string;
  avatar: string;
  notificationType: string;
  wasViewed: boolean;
  idProfile: string;
  idAuthor: string;
  idPost?: string;
};

// Publication
export type Publication = {
  id?: string;
  _id?: string;
  name: string;
  username: string;
  avatar: string;
  imgLink: string;
  description: string;
  date: string;
  likes: Like[];
  comments: Comment[];
  idAuthor?: string;
  context?: string;
};

// User
export type User = {
  status?: string;
  id: string;
  _id?: string;
  email: string;
  name: string;
  username: string;
  publications: Publication[];
  followers: Follow[];
  following: Follow[];
  avatar: string;
  description: string;
  recentUsers?: RecentSearch[];
  notifications?: Notification[];
};

export type UserEdit = {
  avatar: File | string;
  name: string;
  username: string;
  description: string;
  email: string;
};

export type ForeignUser = {
  id: string;
  _id?: string;
  email: string;
  name: string;
  username: string;
  publications: Publication[];
  followers: Follow[];
  following: Follow[];
  avatar: string;
  description: string;
  recentUsers?: RecentSearch[];
};

// Search
export type RecentSearch = {
  id?: string;
  idSearched: string;
  username: string;
  name: string;
  avatar: string;
};

export type UIContextT = {
  modal: Modal;
  previewSrc: string;
  alert: MAlert;
  menuConfig: MConfig;
  setMenuConfigClose: () => void;
  setMenuConfigOpen: () => void;
  setPreviewSrc: React.Dispatch<React.SetStateAction<string>>;
  setModalClose: () => void;
  setModalOpen: (type: string) => void;
  setAlertClose: () => void;
  setAlertOpen: (
    type: string,
    title: string,
    message: string,
    color: string
  ) => void;
};

export type AuthContextT = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  onLogin: (payload: User) => void;
  checkAuthToken: () => Promise<void>;
  onLogout: () => void;
  onChecking: () => void;
};

export type FilterUser = {
  username: string;
  avatar: string;
};

export type SearchContextT = {
  filterUsers: FilterUser[];
  formState: { query: string };
  activeSearch: boolean;
  setFilterUsers: React.Dispatch<React.SetStateAction<FilterUser[]>>;
  setActiveSearch: React.Dispatch<React.SetStateAction<boolean>>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
};

export type WindowMediaQuery = {
  matches: boolean;
};

export type UseMediaMatch = {
  matchMediaQuery: boolean;
};

export type UseForm<T> = {
  formState: T;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onResetForm: () => void;
};

export type ExploreContextT = {
  explore: Publication[];
  imageOpenFromExplore: boolean;
  getExplore: () => Promise<void>;
  setImageOpenFromExplore: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UseProfileUser = {
  user: User | ForeignUser;
  isMainUser: boolean;
  setUser: React.Dispatch<React.SetStateAction<User & ForeignUser>>;
};

export type ProfileContextT = {
  userForeignProfile: ForeignUser;
  setUserForeignProfile: React.Dispatch<React.SetStateAction<ForeignUser>>;
};

export type NotificationsContextT = {
  openNotifications: boolean;
  setOpenNotifications: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UsePagination = {
  arrayPagination: Pulbication[];
  allViewed: boolean;
  loading: boolean;
  elementRef: MutableRefObject<HTMLElement | null>;
};

export type UseLike = {
  handleAddLike: ({
    idPublication,
    context,
  }: {
    idPublication: string;
    context?: string;
  }) => Promise<void>;
  handleRemoveLike: ({
    idPublication,
    context,
  }: {
    idPublication: string;
    context?: string;
  }) => Promise<void>;
};

export type PublicationContextT = {
  formState: Partial<Publication>;
  activePublication: Publication;
  setActivePublication: React.Dispatch<React.SetStateAction<Publication>>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onResetForm: () => void;
  handleNewPublication: () => Promise<{
    message: string;
    publication: Publication;
  }>;
};

export type FeedContextT = {
  feed: Publication[];
  setFeed: React.Dispatch<React.SetStateAction<Publication[]>>;
  getFeed: () => Promise<void>;
};

export type UseFollow = {
  handleFollow: (idAuthorNotification?: string) => Promise<void>;
  handleUnFollow: (idAuthorNotification?: string) => Promise<void>;
};

export type UseComment = {
  handleAddComment: (
    e: FormEvent<HTMLFormElement>,
    idPublication: string,
    comment: string,
    context: string,
    onResetForm: () => void
  ) => Promise<void>;
};

export type SuggestionContextT = {
  suggestions: User[];
  getSuggestions: () => Promise<void>;
};

// Interfaces

export interface UIContextProps {
  children: React.ReactNode;
}

export interface AuthContextProps {
  children: React.ReactNode;
}

export interface SearchContextProps {
  children: React.ReactNode;
}

export interface ExploreContextProps {
  children: React.ReactNode;
}

export interface ProfileContextProps {
  children: React.ReactNode;
}

export interface NotificationsContextProps {
  children: React.ReactNode;
}

export interface AuthLayoutProps {
  children: React.ReactNode;
  text: string;
  textLink: string;
}

export interface PublicationContextProps {
  children: React.ReactNode;
}

export interface FeedContextProps {
  children: React.ReactNode;
}

export interface SuggestionContextProps {
  children: React.ReactNode;
}

export interface HistoriesProps {
  className?: string;
  profileHistories: boolean;
}
