export type TTokenDetails = {
  userID: string;
  firstName: string;
  role: string;
};

export interface IRootState {
  userDetails: TTokenDetails;
}
