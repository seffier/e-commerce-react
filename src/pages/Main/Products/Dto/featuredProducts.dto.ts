export interface FeaturedProductsDto {
    id: number
    name: string
    imageUrl: string
    price: number
    description: string
}

export interface AddToCartRequestDto {
    id: number
}