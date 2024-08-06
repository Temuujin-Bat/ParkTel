export interface IRootState {
  userDetails: TTokenDetails;
}

export type TTokenDetails = {
  userID: string;
  firstName: string;
};
