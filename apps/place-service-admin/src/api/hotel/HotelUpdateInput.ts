import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { FacilityUpdateManyWithoutHotelsInput } from "./FacilityUpdateManyWithoutHotelsInput";
import { ImageUpdateManyWithoutHotelsInput } from "./ImageUpdateManyWithoutHotelsInput";

export type HotelUpdateInput = {
  address?: string | null;
  city?: CityWhereUniqueInput | null;
  facilities?: FacilityUpdateManyWithoutHotelsInput;
  images?: ImageUpdateManyWithoutHotelsInput;
  name?: string | null;
};
