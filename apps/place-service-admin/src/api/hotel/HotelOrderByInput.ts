import { SortOrder } from "../../util/SortOrder";

export type HotelOrderByInput = {
  address?: SortOrder;
  cityId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
