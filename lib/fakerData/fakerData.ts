import { faker } from "@faker-js/faker"

import { SaleStatus } from "@/app/(lobby)/store/[id]/components/product-card"

import { ProductCategory } from "../validations/product"
import { OpenStatus, StoreType } from "../validations/store"

const MAX_PRODUCTS = 100
const MAX_STORES = 10
const MAX_HOURS = 12
const MAX_PRODUCT_IMAGES = 6
const MIN_STORE_PRODUCTS = 1
const MAX_STORE_PRODUCTS = 20
const MAX_INVENTORY = 100
const MAX_PRICE = 5000

const generateSingleProduct = (index: number) => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  description: faker.lorem.sentence(),
  category: faker.helpers.arrayElement(Object.values(ProductCategory)),
  saleStatus: faker.helpers.arrayElement(Object.values(SaleStatus)),
  inventory: faker.number.int({ min: 1, max: MAX_INVENTORY }),
  footer: faker.lorem.sentence(),
  images: generateImageUrls(
    Math.floor(Math.random() * MAX_PRODUCT_IMAGES),
    index
  ),
  price: faker.number.int({ min: 1, max: MAX_PRICE }),
})

const generateImageUrls = (num: number, startIndex: number) => {
  return Array.from(
    { length: num },
    (_, i) => `https://picsum.photos/id/${269 + startIndex + i}/800/800`
  )
}

export const fakeProductList = Array.from(
  { length: MAX_PRODUCTS },
  (_, index) => generateSingleProduct(index)
)

const generateSingleStore = (index: number): StoreType => ({
  id: faker.string.uuid(),
  name: faker.company.name(),
  description: faker.lorem.sentence(),
  openStatus: faker.helpers.arrayElement(Object.values(OpenStatus)),
  location: faker.location.streetAddress(),
  openingHours: `${faker.number.int({
    min: 1,
    max: MAX_HOURS,
  })} AM - ${faker.number.int({ min: 1, max: MAX_HOURS })} PM`,
  phone: faker.phone.number(),
  products: fakeProductList.slice(
    0,
    faker.number.int({ min: MIN_STORE_PRODUCTS, max: MAX_STORE_PRODUCTS })
  ),
  imgURL: `https://picsum.photos/id/${index + 314}/800/800`,
})

export const fakeStoreList = Array.from({ length: MAX_STORES }, (_, index) =>
  generateSingleStore(index)
)
