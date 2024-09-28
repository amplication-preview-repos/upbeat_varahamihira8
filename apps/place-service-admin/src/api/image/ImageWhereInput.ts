import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ImageWhereInput = {
  hotel?: HotelWhereUniqueInput;
  id?: StringFilter;
  url?: StringNullableFilter;
};
