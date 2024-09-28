import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { FacilityListRelationFilter } from "../facility/FacilityListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";

export type HotelWhereInput = {
  address?: StringNullableFilter;
  city?: CityWhereUniqueInput;
  facilities?: FacilityListRelationFilter;
  id?: StringFilter;
  images?: ImageListRelationFilter;
  name?: StringNullableFilter;
};
