import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CountryList } from "./country/CountryList";
import { CountryCreate } from "./country/CountryCreate";
import { CountryEdit } from "./country/CountryEdit";
import { CountryShow } from "./country/CountryShow";
import { ImageList } from "./image/ImageList";
import { ImageCreate } from "./image/ImageCreate";
import { ImageEdit } from "./image/ImageEdit";
import { ImageShow } from "./image/ImageShow";
import { CityList } from "./city/CityList";
import { CityCreate } from "./city/CityCreate";
import { CityEdit } from "./city/CityEdit";
import { CityShow } from "./city/CityShow";
import { HotelList } from "./hotel/HotelList";
import { HotelCreate } from "./hotel/HotelCreate";
import { HotelEdit } from "./hotel/HotelEdit";
import { HotelShow } from "./hotel/HotelShow";
import { FacilityList } from "./facility/FacilityList";
import { FacilityCreate } from "./facility/FacilityCreate";
import { FacilityEdit } from "./facility/FacilityEdit";
import { FacilityShow } from "./facility/FacilityShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"PlaceService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Country"
          list={CountryList}
          edit={CountryEdit}
          create={CountryCreate}
          show={CountryShow}
        />
        <Resource
          name="Image"
          list={ImageList}
          edit={ImageEdit}
          create={ImageCreate}
          show={ImageShow}
        />
        <Resource
          name="City"
          list={CityList}
          edit={CityEdit}
          create={CityCreate}
          show={CityShow}
        />
        <Resource
          name="Hotel"
          list={HotelList}
          edit={HotelEdit}
          create={HotelCreate}
          show={HotelShow}
        />
        <Resource
          name="Facility"
          list={FacilityList}
          edit={FacilityEdit}
          create={FacilityCreate}
          show={FacilityShow}
        />
      </Admin>
    </div>
  );
};

export default App;
