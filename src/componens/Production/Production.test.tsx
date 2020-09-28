import { render } from "react-testing-library";
import Production from "./Production";

describe("Production component", () => {
  it("matches default snapshot", () => {
    const { asFragment } = render(<Production />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  it("matches custom snapshot", () => {
    const { asFragment } = render(<Production type="custom" />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
