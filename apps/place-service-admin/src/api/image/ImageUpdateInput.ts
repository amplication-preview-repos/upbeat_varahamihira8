import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type ImageUpdateInput = {
  hotel?: HotelWhereUniqueInput | null;
  url?: string | null;
};
