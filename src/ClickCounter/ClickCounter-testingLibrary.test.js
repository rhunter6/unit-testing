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
    // You can use getByText to find the button.
    userEvent.click(screen.getByText('Click Me!'));
    expect(screen.getByText('Click Count: 1')).toBeInTheDocument();
    // You can use getByRole with the exact text.
    userEvent.click(screen.getByRole('button', {name: 'Click Me!'}));
    // You can use getByRole with a lower case search.
    userEvent.click(screen.getByRole('button', {name: /click me!/i}));
    // You can get all of the buttons and then use an array index.  Using an index is not
    // very obviouse to other programmers, so you may need to add a comment in your test.
    userEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByText('Click Count: 4')).toBeInTheDocument();
    
    // But we can't skip the counter to 25 and test.  We can only do that by clicking the button
    // in a loop.
    for(let i = 0; i < 25-4; i++) {
        userEvent.click(screen.getByText('Click Me!'));
    }
    expect(screen.getByText('Click Count: 25')).toBeInTheDocument();
  });
});
