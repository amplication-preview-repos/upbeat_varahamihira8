import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { HotelListRelationFilter } from "../hotel/HotelListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CityWhereInput = {
  country?: CountryWhereUniqueInput;
  hotels?: HotelListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
