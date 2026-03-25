import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

export function renderWithProviders(ui, { route = "/" } = {}) {
  return render(
    <CartProvider>
      <MemoryRouter initialEntries={[route]}>
        {ui}
      </MemoryRouter>
    </CartProvider>
  );
}
