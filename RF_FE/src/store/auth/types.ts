export type TTokenDetails = {
  userID?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  mobile?: string;
  role?: string;
};

export interface IRootState {
  userDetails: TTokenDetails;
}
