import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FancyButton from "./FancyButton";

describe("FancyButton testing", () => {
  it("should render", () => {
    render(<FancyButton>Test Click</FancyButton>);
    expect(screen.getByText("Test Click")).toBeInTheDocument();
  });

  it("should call onClick prop when clicked", () => {
    const handleClick = jest.fn();

    render(<FancyButton onClick={handleClick}>Test Click</FancyButton>);
    userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1)
  });
});
