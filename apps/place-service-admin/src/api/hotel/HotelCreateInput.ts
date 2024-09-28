import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { FacilityCreateNestedManyWithoutHotelsInput } from "./FacilityCreateNestedManyWithoutHotelsInput";
import { ImageCreateNestedManyWithoutHotelsInput } from "./ImageCreateNestedManyWithoutHotelsInput";

export type HotelCreateInput = {
  address?: string | null;
  city?: CityWhereUniqueInput | null;
  facilities?: FacilityCreateNestedManyWithoutHotelsInput;
  images?: ImageCreateNestedManyWithoutHotelsInput;
  name?: string | null;
};
