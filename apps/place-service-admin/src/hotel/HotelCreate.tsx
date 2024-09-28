import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CityTitle } from "../city/CityTitle";
import { FacilityTitle } from "../facility/FacilityTitle";
import { ImageTitle } from "../image/ImageTitle";

export const HotelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <ReferenceInput source="city.id" reference="City" label="City">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="facilities" reference="Facility">
          <SelectArrayInput
            optionText={FacilityTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="images" reference="Image">
          <SelectArrayInput
            optionText={ImageTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
