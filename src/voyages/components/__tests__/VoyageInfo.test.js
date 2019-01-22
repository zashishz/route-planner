import React from "react";
import renderer from "react-test-renderer";

import { VoyageInfo } from "../VoyageInfo";

describe("Render VoyageInfo correctly", () => {
  it("render correctly", () => {
    const tree = renderer.create(<VoyageInfo />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
