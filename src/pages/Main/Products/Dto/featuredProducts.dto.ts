export interface FeaturedProductsDto {
    id: number
    name: string
    imageUrl: string
    price: number
    description: string
    quantity: number
}

export interface AddToCartRequestDto {
    id: number
}