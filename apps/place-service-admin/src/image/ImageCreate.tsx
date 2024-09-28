import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { HotelTitle } from "../hotel/HotelTitle";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="hotel.id" reference="Hotel" label="Hotel">
          <SelectInput optionText={HotelTitle} />
        </ReferenceInput>
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
