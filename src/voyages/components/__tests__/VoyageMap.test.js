import React from "react";
import renderer from "react-test-renderer";

import { VoyageMap } from "../VoyageMap";

describe("Render VoyageMap correctly", () => {
  it("render correctly", () => {
    const tree = renderer.create(<VoyageMap />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
