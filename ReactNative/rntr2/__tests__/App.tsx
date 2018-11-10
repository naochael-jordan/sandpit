// components/__tests__/App.tsx
import React from "react";
import renderer from "react-test-renderer";

import App from "../src/App";

it("renders correctly with defaults", () => {
  const button = renderer.create(<App />).toJSON();
  expect(button).toMatchSnapshot();
});
