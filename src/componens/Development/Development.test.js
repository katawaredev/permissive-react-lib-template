import { render } from "react-testing-library";
import Development from "./Development";

describe("Development component", () => {
  it("matches default snapshot", () => {
    const { asFragment } = render(<Development />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  it("matches custom snapshot", () => {
    const { asFragment } = render(<Development type="custom" />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
