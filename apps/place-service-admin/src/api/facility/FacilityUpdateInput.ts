import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type FacilityUpdateInput = {
  description?: string | null;
  hotel?: HotelWhereUniqueInput | null;
  name?: string | null;
};
