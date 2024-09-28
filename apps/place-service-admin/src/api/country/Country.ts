import { City } from "../city/City";

export type Country = {
  cities?: Array<City>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
