import React from "react";
import renderer from "react-test-renderer";

import { RouteForm } from "../RouteForm";

describe("Render RouteForm correctly", () => {
  it("render correctly", () => {
    const tree = renderer.create(<RouteForm />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
