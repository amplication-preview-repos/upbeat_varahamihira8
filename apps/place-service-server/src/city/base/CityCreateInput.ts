/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CountryWhereUniqueInput } from "../../country/base/CountryWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { HotelCreateNestedManyWithoutCitiesInput } from "./HotelCreateNestedManyWithoutCitiesInput";

@InputType()
class CityCreateInput {
  @ApiProperty({
    required: false,
    type: () => CountryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CountryWhereUniqueInput)
  @IsOptional()
  @Field(() => CountryWhereUniqueInput, {
    nullable: true,
  })
  country?: CountryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => HotelCreateNestedManyWithoutCitiesInput,
  })
  @ValidateNested()
  @Type(() => HotelCreateNestedManyWithoutCitiesInput)
  @IsOptional()
  @Field(() => HotelCreateNestedManyWithoutCitiesInput, {
    nullable: true,
  })
  hotels?: HotelCreateNestedManyWithoutCitiesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { CityCreateInput as CityCreateInput };
