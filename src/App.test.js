import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  // To see the DOM that React Testing Library looks at:
  // screen.debug();

  // I generally use getByText().
  // const counter = screen.getByText(/click count/i);
  // expect(counter).toBeInTheDocument();

  // But the docs say you should first use getByRole().
  // To get a list of suggested roles to query by:
  // screen.getByRole('');

  // So you can use this test.
  // expect(screen.getByRole('button')).toBeInTheDocument();

  // But not all elements have the same name for their role.
  // RTL can't find header, but it is in the document.
  // You have to use the roles as defined in
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
  // expect(screen.getByRole('header')).toBeInTheDocument();

  // To have the test work, you have to use the role of banner.
  // expect(screen.getByRole('banner')).toBeInTheDocument();
});

describe("App testing the click counter", () => {
  it("should test tab focus", () => {
    render(<App />);
    const [basicButton, fancyButton] = screen.getAllByRole("button");

    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(basicButton).toHaveFocus();
    userEvent.tab();
    expect(fancyButton).toHaveFocus();
  });
});
