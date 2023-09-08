import { MenuIcon } from "lucide-react"

export const Menu = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-2">
        <MenuIcon />
        <h1 className="text-4xl">Modern Web</h1>
      </div>
      <div className="  ">
        <label htmlFor="searchFood-input" className="rounded-md py-5">
          <input
            type="text"
            name="searchFood-input"
            id="searchFood-input"
            placeholder="search input"
            className="rounded-md border-b-2 border-red-300 py-5 focus:border-red-700"
          />
        </label>
      </div>
      <div>Cart</div>
    </div>
  )
}
