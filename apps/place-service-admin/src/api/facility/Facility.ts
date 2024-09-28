import { Hotel } from "../hotel/Hotel";

export type Facility = {
  createdAt: Date;
  description: string | null;
  hotel?: Hotel | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
