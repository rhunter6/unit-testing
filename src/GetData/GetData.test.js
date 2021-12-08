import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { GetData } from "./GetData";

describe("GetData testing", () => {
  it("should render", () => {
    render(<GetData />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  // Notice that I need to add async to the test function.
  it("should wait for data", async () => {
    render(<GetData />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    // screen.debug();

    // Try #1  - Did not work because testing library has a 1 second timeout and I am using 3.
    // expect(await screen.findByText('I have data.')).toBeInTheDocument();

    // Try #2 - Increased timeout to 5 seconds.  But now I get this error:
    // Warning: Can't perform a React state update on an unmounted component. This is a no-op,
    // but it indicates a memory leak in your application. To fix, cancel all subscriptions
    // and asynchronous tasks in a useEffect cleanup function.
    //
    // So when the effect wants to update, the component is unmounted so we can't update the UI.
    // expect(await screen.findByText('I have data.', undefined, {timeout: 5000})).toBeInTheDocument();

    // Try #3 - Found out that I needed to wrap the update in a waitfor which wraps the code in an
    // act() call.  See https://reactjs.org/docs/testing-recipes.html#act
    //
    // But this still gives me the "Warning: Can't perform a React state update on an unmounted component."
    // await act(async () => {
    //   await new Promise((resolve) => {
    //     setTimeout(resolve, 4000);
    //   });
    // });
    // expect(screen.getByText("Your data is: I have data.")).toBeInTheDocument();
    // screen.debug();
  });

  // Try #4.  Use jest fake timers!
  it("should work with jest timeout", async () => {
    // Let's me speed up setTimeout.
    jest.useFakeTimers();

    render(<GetData />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    // Need to wrap this in an act so Rect updates correctly.
    await act(async () => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByText("Your data is: I have data.")).toBeInTheDocument();

    // Go back to real timers.
    jest.useRealTimers();
  });
});
