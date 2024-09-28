import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { HotelUpdateManyWithoutCitiesInput } from "./HotelUpdateManyWithoutCitiesInput";

export type CityUpdateInput = {
  country?: CountryWhereUniqueInput | null;
  hotels?: HotelUpdateManyWithoutCitiesInput;
  name?: string | null;
};
