import { CityUpdateManyWithoutCountriesInput } from "./CityUpdateManyWithoutCountriesInput";

export type CountryUpdateInput = {
  cities?: CityUpdateManyWithoutCountriesInput;
  name?: string | null;
};
