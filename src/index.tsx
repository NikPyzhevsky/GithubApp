import React from "react";
import { Navigator } from "./navigation";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};
