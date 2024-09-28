import { Country } from "../country/Country";
import { Hotel } from "../hotel/Hotel";

export type City = {
  country?: Country | null;
  createdAt: Date;
  hotels?: Array<Hotel>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
