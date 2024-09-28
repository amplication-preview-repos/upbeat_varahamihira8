import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { HotelCreateNestedManyWithoutCitiesInput } from "./HotelCreateNestedManyWithoutCitiesInput";

export type CityCreateInput = {
  country?: CountryWhereUniqueInput | null;
  hotels?: HotelCreateNestedManyWithoutCitiesInput;
  name?: string | null;
};
