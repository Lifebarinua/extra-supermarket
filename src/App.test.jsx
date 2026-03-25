import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { renderWithProviders } from "./test-utils"; // or same file

test("renders Cart page when route is /cart", () => {
  renderWithProviders(<App />, { route: "/cart" });

  expect(screen.getByText(/your cart/i)).toBeInTheDocument();
});

test("navigates to cart when Cart link is clicked", async () => {
  renderWithProviders(<App />);

  await userEvent.click(
    screen.getByRole("link", { name: /cart/i })
  );

  expect(screen.getByText(/your cart/i)).toBeInTheDocument();
});