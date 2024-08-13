export type TButtons = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
};

export type TCoordinates = {
  latitude: number;
  longitude: number;
};

export type TFeatures = {
  "Covered parking": boolean;
  "Security camera": boolean;
  "On-site staff": boolean;
  "Underground parking": boolean;
  "Disabled access": boolean;
  "Electric charging": boolean;
};

export type TSelectedDays = {
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
  setAddressLine?: React.Dispatch<React.SetStateAction<string>>;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  setCoordinates?: React.Dispatch<React.SetStateAction<TCoordinates>>;
  features?: TFeatures;
  setFeatures?: React.Dispatch<React.SetStateAction<TFeatures>>;
  type?: string;
  setType?: React.Dispatch<React.SetStateAction<string>>;
  selectedDays?: TSelectedDays;
  setSelectedDays?: React.Dispatch<React.SetStateAction<TSelectedDays>>;
  price?: string;
  setPrice?: React.Dispatch<React.SetStateAction<string>>;
  photos?: string[];
  setPhotos?: React.Dispatch<React.SetStateAction<string[]>>;
};
