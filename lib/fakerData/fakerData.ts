import { faker } from "@faker-js/faker"

import { SaleStatus } from "@/app/(lobby)/products/components/product-card"

import { ProductCategory } from "../validations/product"

const generateImageUrls = (num: number, startIndex: number) => {
  return Array.from(
    { length: num },
    (_, i) => `https://picsum.photos/id/${269 + startIndex + i}/800/800`
  )
}

export const fakeProductList = Array.from({ length: 100 }, (_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    category: faker.helpers.arrayElement(Object.values(ProductCategory)),
    saleStatus: faker.helpers.arrayElement(Object.values(SaleStatus)),
    inventory: faker.datatype.number(),
    footer: faker.lorem.sentence(),
    images: generateImageUrls(Math.floor(Math.random() * 6), index), // 0-5張圖片
    price: faker.datatype.number(),
  }
})
