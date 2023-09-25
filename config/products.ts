export enum SortOption {
    PRICE_ASC = "price.asc",
    PRICE_DESC = "price.desc",
    NAME_ASC = "name.asc",
    NAME_DESC = "name.desc",
}

export const sortOptions = [
    { label: "Price: Low to high", value: SortOption.PRICE_ASC },
    { label: "Price: High to low", value: SortOption.PRICE_DESC },
    {
        label: "Alphabetical: A to Z",
        value: SortOption.NAME_ASC,
    },
    {
        label: "Alphabetical: Z to A",
        value: SortOption.NAME_DESC,
    },
];