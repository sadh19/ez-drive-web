import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

test("it should render main page", () => {
  render(<Page />);
  expect(screen.getByText("Soy texto")).toBeDefined();
});
