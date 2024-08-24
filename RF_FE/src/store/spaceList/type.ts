type Coordinates = {
  latitude: number;
  longitude: number;
};

type Features = {
  "Covered parking": boolean;
  "Security camera": boolean;
  "On-site staff": boolean;
  "Underground parking": boolean;
  "Disabled access": boolean;
  "Electric charging": boolean;
};

type SelectedDays = {
  Sun: boolean;
  Mon: boolean;
  Tues: boolean;
  Weds: boolean;
  Thurs: boolean;
  Fri: boolean;
  Sat: boolean;
};

export type TUserSpaceList = {
  _id: string;
  addressLine: string;
  coordinates: Coordinates;
  features: Features;
  type: string;
  selectedDays: SelectedDays;
  price: string;
  photos: string[];
  user: string;
  updatedAt: string;
};

export interface IRootState {
  userSpaceList: TUserSpaceList[];
  userSingleSpaceList: Partial<TUserSpaceList>;
}
