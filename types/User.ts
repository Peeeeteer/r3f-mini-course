export type TUser = TPureUser | null;

export type TPureUser = {
  id: number;
  displayName: string;
  email: string;
  basket: any[];
};
