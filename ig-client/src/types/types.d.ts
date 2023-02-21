export type Publication = {
  id?: string;
  imgLink: string;
  countLikes: number;
  countComments: number;
};

export type Histories = { className?: string; profileHistories: boolean };

export type MAlert = {
  isOpen: boolean;
  type: string;
  message: string;
};

export type Modal = {
  isOpen: boolean;
  type: string;
};
