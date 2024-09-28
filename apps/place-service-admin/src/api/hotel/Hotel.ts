import { City } from "../city/City";
import { Facility } from "../facility/Facility";
import { Image } from "../image/Image";

export type Hotel = {
  address: string | null;
  city?: City | null;
  createdAt: Date;
  facilities?: Array<Facility>;
  id: string;
  images?: Array<Image>;
  name: string | null;
  updatedAt: Date;
};
