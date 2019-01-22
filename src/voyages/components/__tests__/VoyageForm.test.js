import React from "react";
import renderer from "react-test-renderer";

import { VoyageForm } from "../VoyageForm";

describe("Render VoyageForm correctly", () => {
  it("render correctly", () => {
    const tree = renderer.create(<VoyageForm />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
