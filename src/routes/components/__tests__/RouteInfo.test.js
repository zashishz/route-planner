import React from "react";
import renderer from "react-test-renderer";

import { RouteInfo } from "../RouteInfo";

describe("Render RouteInfo correctly", () => {
  it("render correctly", () => {
    const tree = renderer.create(<RouteInfo />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
