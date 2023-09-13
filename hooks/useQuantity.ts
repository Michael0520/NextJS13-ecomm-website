import { useState } from "react"

export const useQuantity = (initialValue = 1) => {
  const [quantity, setQuantity] = useState(initialValue)

  const increment = () => {
    console.log("increment")
    setQuantity((prev) => prev + 1)
  }

  const decrement = () => {
    console.log("decrement")
    setQuantity((prev) => Math.max(0, prev - 1))
  }

  return { quantity, setQuantity, increment, decrement }
}
