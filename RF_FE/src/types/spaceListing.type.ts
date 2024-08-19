type TCoordinates = {
  latitude: number;
  longitude: number;
};

type TFeatures = {
  "Covered parking": boolean;
  "Security camera": boolean;
  "On-site staff": boolean;
  "Underground parking": boolean;
  "Disabled access": boolean;
  "Electric charging": boolean;
};

type TSelectedDays = {
  Sun: boolean;
  Mon: boolean;
  Tues: boolean;
  Weds: boolean;
  Thurs: boolean;
  Fri: boolean;
  Sat: boolean;
};

export type TListYourSpace = {
  addressLine?: string;
  coordinates?: TCoordinates;
  features?: TFeatures;
  type?: string;
  selectedDays?: TSelectedDays;
  price?: string;
  photos?: string[];
  _id?: string;
};

export type TOwnerListingGridProps = {
  myListings: TListYourSpace[];
};
