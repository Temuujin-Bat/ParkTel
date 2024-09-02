export type HandleCloseType = () => void;

export type TLogout = {
  logoutHandler: () => Promise<void>;
};
