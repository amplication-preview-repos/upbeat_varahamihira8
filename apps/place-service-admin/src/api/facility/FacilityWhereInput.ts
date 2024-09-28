import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type FacilityWhereInput = {
  description?: StringNullableFilter;
  hotel?: HotelWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
