import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type FacilityCreateInput = {
  description?: string | null;
  hotel?: HotelWhereUniqueInput | null;
  name?: string | null;
};
