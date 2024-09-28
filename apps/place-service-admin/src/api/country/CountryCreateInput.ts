import { CityCreateNestedManyWithoutCountriesInput } from "./CityCreateNestedManyWithoutCountriesInput";

export type CountryCreateInput = {
  cities?: CityCreateNestedManyWithoutCountriesInput;
  name?: string | null;
};
