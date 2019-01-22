import React from "react";
import renderer from "react-test-renderer";

import { VoyageInput } from "../VoyageInput";

describe("Render VoyageInput correctly", () => {
  it("render correctly", () => {
    const tree = renderer.create(<VoyageInput />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
