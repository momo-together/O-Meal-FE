import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("렌더링이 정상적으로 된다", () => {
    render(<Home />);
    const container = screen.getByRole("generic");
    expect(container).toBeInTheDocument();
  });
});
