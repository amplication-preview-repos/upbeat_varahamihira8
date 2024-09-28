import { Hotel } from "../hotel/Hotel";

export type Image = {
  createdAt: Date;
  hotel?: Hotel | null;
  id: string;
  updatedAt: Date;
  url: string | null;
};
