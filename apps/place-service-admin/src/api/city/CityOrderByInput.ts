import { SortOrder } from "../../util/SortOrder";

export type CityOrderByInput = {
  countryId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
