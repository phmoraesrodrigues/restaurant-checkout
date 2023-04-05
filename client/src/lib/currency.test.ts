import { formatCurrency } from "./currency";

describe("formatCurrency", () => {
  it("formats currency", () => {
    expect(formatCurrency(1000)).toBe("$1,000.00");
  });
});
