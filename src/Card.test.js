import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";


//Smoke Test
it("SMOKE: renders without crashing", () => {
  render(<Card />);
});

//Snapshot test
it("SNAP: matches snapshot", () => {
  const {asFragment} = render(<Card/>);
  expect(asFragment).toMatchSnapshot();
});