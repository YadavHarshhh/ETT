import { Product } from './types'

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Pod System',
    description: 'Compact and stylish pod system with excellent vapor production',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1590081528708-66ef7d78f779?w=500&h=500&fit=crop',
    stock: 42,
    category: 'Devices',
    nicotineContent: '5% Nicotine Salt'
  },
  {
    id: '2',
    name: 'Blue Raspberry E-Liquid',
    description: 'Refreshing blue raspberry flavor with smooth finish',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1587829191301-42c15c61e660?w=500&h=500&fit=crop',
    stock: 78,
    category: 'E-Liquids',
    nicotineContent: '0mg - 50mg'
  },
  {
    id: '3',
    name: 'Sleek Vape Pen',
    description: 'Ultra-thin vape pen with precision temperature control',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1578365131143-57c0f087203f?w=500&h=500&fit=crop',
    stock: 35,
    category: 'Vape Pens'
  },
  {
    id: '4',
    name: 'Vanilla Cream E-Liquid',
    description: 'Smooth vanilla cream blend for an all-day vape',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1632572200969-2b1842e27144?w=500&h=500&fit=crop',
    stock: 92,
    category: 'E-Liquids',
    nicotineContent: '0mg - 50mg'
  },
  {
    id: '5',
    name: 'Advanced Mod Device',
    description: 'Dual-battery mod with 220W output and customizable settings',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1565290333529-db3827992b4f?w=500&h=500&fit=crop',
    stock: 18,
    category: 'Devices'
  },
  {
    id: '6',
    name: 'Menthol Ice E-Liquid',
    description: 'Crisp menthol with cooling sensation and clean finish',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1549999514-414bb05f8ea1?w=500&h=500&fit=crop',
    stock: 65,
    category: 'E-Liquids',
    nicotineContent: '0mg - 50mg'
  },
  {
    id: '7',
    name: 'Cotton Coil Pack',
    description: 'Premium organic cotton coils for optimal flavor and durability',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    stock: 156,
    category: 'Accessories'
  },
  {
    id: '8',
    name: 'Fruity Mix E-Liquid',
    description: 'Complex blend of tropical and citrus fruits',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1597320159968-0db61023e1b6?w=500&h=500&fit=crop',
    stock: 88,
    category: 'E-Liquids',
    nicotineContent: '0mg - 50mg'
  },
  {
    id: '9',
    name: 'Rechargeable Battery',
    description: 'High-capacity 18650 battery with fast charging technology',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1613141422207-7624e122e50d?w=500&h=500&fit=crop',
    stock: 124,
    category: 'Accessories'
  },
  {
    id: '10',
    name: 'Classic Tube Mod',
    description: 'Sleek mechanical mod with minimalist design',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    stock: 28,
    category: 'Devices'
  },
  {
    id: '11',
    name: 'Tobacco Blend E-Liquid',
    description: 'Rich tobacco flavor with subtle undertones',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1591437281884-767810ca3467?w=500&h=500&fit=crop',
    stock: 45,
    category: 'E-Liquids',
    nicotineContent: '0mg - 50mg'
  },
  {
    id: '12',
    name: 'Tank Clearomizer',
    description: 'Large capacity tank with excellent flavor production',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1623621685990-7a2f0d1ae0b4?w=500&h=500&fit=crop',
    stock: 71,
    category: 'Accessories'
  }
]

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
