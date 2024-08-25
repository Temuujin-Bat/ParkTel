export type TLinkType = {
  name: string;
  url?: string;
  action?: () => void;
};

export type TLinksType = {
  links: TLinkType[];
};

export type TUserRole = "owner" | "driver";

export interface TDrawerListOwnerDriverProps {
  userRole: TUserRole;
  setUserRole: React.Dispatch<React.SetStateAction<TUserRole>>;
}
