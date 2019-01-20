import React from "react";
import renderer from "react-test-renderer";

import { RouteMap } from "../RouteMap";

describe("Render RouteMap correctly", () => {
  it("render correctly", () => {
    const tree = renderer.create(<RouteMap />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
