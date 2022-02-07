export type CartItemType = {
    id: number
    title: string
    shortDescription: string
    longDescription: string,
    fullDescription: string,
    images: string[]
    price: number
    color: string
    sizes: string[]
    sizesUnavailable: string[]
    selectedSize: string
    offer: string
    amount: number
    chatNow: string
}