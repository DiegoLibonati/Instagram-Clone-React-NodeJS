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

// Histories
export type Histories = {
  className?: string;
  profileHistories: boolean;
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
  recentUsers: RecentSearch[];
  notifications: Notification[];
};

export type UserEdit = {
  avatar: File;
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
};

// Search
export type RecentSearch = {
  idSearched: string;
  username: string;
  name: string;
  avatar: string;
};
