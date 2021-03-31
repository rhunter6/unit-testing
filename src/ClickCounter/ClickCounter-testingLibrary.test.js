import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import ClickCounter from "./ClickCounter";

describe("ClickCounter testing", () => {
  it("should render", () => {
    render(<ClickCounter />);
    expect(screen.getByText('Click Count: 0')).toBeInTheDocument();
  });

  it("should click the counter", () => {
    render(<ClickCounter />);
    expect(screen.getByText('Click Count: 0')).toBeInTheDocument();
    userEvent.click(screen.getByText('Click Me!'));
    expect(screen.getByText('Click Count: 1')).toBeInTheDocument();
    userEvent.click(screen.getByText('Click Me!'));
    userEvent.click(screen.getByText('Click Me!'));
    userEvent.click(screen.getByText('Click Me!'));
    expect(screen.getByText('Click Count: 4')).toBeInTheDocument();
    // But we can't skip the counter to 25 and test.  We can only do that by clicking the button
    // in a loop.
    for(let i = 0; i < 25-4; i++) {
        userEvent.click(screen.getByText('Click Me!'));
    }
    expect(screen.getByText('Click Count: 25')).toBeInTheDocument();
  });
});
