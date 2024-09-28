import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type ImageCreateInput = {
  hotel?: HotelWhereUniqueInput | null;
  url?: string | null;
};
