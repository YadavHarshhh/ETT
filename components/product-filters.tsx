'use client'

import { useState } from 'react'
import { FilterState } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

interface ProductFiltersProps {
  onFilterChange: (filters: FilterState) => void
  currentFilters: FilterState
}

const categories = ['Vape Pens', 'E-Liquids', 'Devices', 'Accessories']
const priceRanges = [
  { label: 'All Prices', min: 0, max: 1000 },
  { label: 'Under $15', min: 0, max: 15 },
  { label: '$15 - $30', min: 15, max: 30 },
  { label: '$30 - $50', min: 30, max: 50 },
  { label: 'Over $50', min: 50, max: 1000 }
]

export function ProductFilters({ onFilterChange, currentFilters }: ProductFiltersProps) {
  const [searchQuery, setSearchQuery] = useState(currentFilters.searchQuery)

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    onFilterChange({
      ...currentFilters,
      searchQuery: value
    })
  }

  const handleCategoryChange = (category: string | null) => {
    onFilterChange({
      ...currentFilters,
      category: category === currentFilters.category ? null : category
    })
  }

  const handlePriceChange = (min: number, max: number) => {
    onFilterChange({
      ...currentFilters,
      priceRange: [min, max]
    })
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-6">
      {/* Search */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">
          Search Products
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">
          Category
        </label>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`w-full text-left px-4 py-2 rounded transition-colors ${
                currentFilters.category === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80 text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">
          Price Range
        </label>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => handlePriceChange(range.min, range.max)}
              className={`w-full text-left px-4 py-2 rounded transition-colors ${
                currentFilters.priceRange[0] === range.min && currentFilters.priceRange[1] === range.max
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80 text-foreground'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <Button
        onClick={() =>
          onFilterChange({
            category: null,
            priceRange: [0, 1000],
            searchQuery: ''
          })
        }
        variant="outline"
        className="w-full"
      >
        Reset Filters
      </Button>
    </div>
  )
}
