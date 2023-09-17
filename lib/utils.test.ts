import { formatPrice } from "./utils"

describe("formatPrice function", () => {
  test("should format price correctly with default options", () => {
    const result = formatPrice(1000)
    expect(result).toBe("$1K")
  })

  test("should format price with custom currency (EUR) and notation", () => {
    const result = formatPrice(1000, { currency: "EUR", notation: "compact" })
    expect(result).toBe("€1K")
  })
})
