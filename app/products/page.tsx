'use client'

import { useState, useMemo } from 'react'
import { ProductFilters } from '@/components/product-filters'
import { ProductGrid } from '@/components/product-grid'
import { products, searchProducts } from '@/lib/products'
import { FilterState } from '@/lib/types'

export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: null,
    priceRange: [0, 1000],
    searchQuery: ''
  })

  const filteredProducts = useMemo(() => {
    let result = products

    // Filter by search query
    if (filters.searchQuery) {
      result = searchProducts(filters.searchQuery)
    }

    // Filter by category
    if (filters.category) {
      result = result.filter(p => p.category === filters.category)
    }

    // Filter by price range
    result = result.filter(
      p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    )

    return result
  }, [filters])

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            All Products
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Filters Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-20 md:top-24">
              <ProductFilters
                onFilterChange={setFilters}
                currentFilters={filters}
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  )
}
