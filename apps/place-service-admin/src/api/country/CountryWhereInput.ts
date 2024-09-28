import { CityListRelationFilter } from "../city/CityListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CountryWhereInput = {
  cities?: CityListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
