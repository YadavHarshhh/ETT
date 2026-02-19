import { Product } from './types'
import productsData from '@/data/products.json'

export const products: Product[] = productsData.map((p: any) => ({
  id: p.id,
  name: p.name,
  description: p.description,
  price: p.price,
  image: p.image,
  stock: p.stock,
  category: p.category,
  nicotineContent: p.nicotineContent
}))

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery)
  )
}
