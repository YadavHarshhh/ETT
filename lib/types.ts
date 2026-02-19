export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  stock: number
  category: 'Vape Pens' | 'E-Liquids' | 'Devices' | 'Accessories'
  nicotineContent?: string
}

export interface FilterState {
  category: string | null
  priceRange: [number, number]
  searchQuery: string
}
