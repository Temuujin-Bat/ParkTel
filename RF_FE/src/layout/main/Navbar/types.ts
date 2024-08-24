export type TLinkType = {
  name: string;
  url?: string;
  action?: () => void;
};

export type TLinksType = {
  links: TLinkType[];
};
