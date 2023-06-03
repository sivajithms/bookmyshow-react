import React from "react";
import { Route, Routes } from "react-router-dom";

import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
  console.log(rest);
  return (
    <>
      <Routes>
        <Route
          {...rest}
          Component={(props) => {
            return (
              <DefaultLayout>
                <Component {...props} />
              </DefaultLayout>
            );
          }}
        />
      </Routes>
    </>
  );
};

export default DefaultHOC;
