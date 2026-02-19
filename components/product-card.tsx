import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const stockStatus = product.stock > 0 ? 'In Stock' : 'Out of Stock'
  const stockColor = product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-300 h-full flex flex-col group">
        {/* Image Container */}
        <div className="relative w-full aspect-square bg-muted overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Badge className={`absolute top-4 right-4 ${stockColor}`}>
            {product.stock <= 5 && product.stock > 0
              ? 'Low Stock'
              : stockStatus}
          </Badge>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4">
          <Badge variant="secondary" className="w-fit mb-2 text-xs">
            {product.category}
          </Badge>

          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
            {product.name}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {product.description}
          </p>

          {product.nicotineContent && (
            <p className="text-xs text-muted-foreground mb-3">
              {product.nicotineContent}
            </p>
          )}

          {/*<div className="flex items-center justify-between mt-auto">
            <span className="text-xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90"
              disabled={product.stock === 0}
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline ml-1">Add</span>
            </Button>
          </div>*/}
        </div>
      </div>
    </Link>
  )
}
