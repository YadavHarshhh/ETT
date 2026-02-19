import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ShoppingCart, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getProductById, products } from '@/lib/products'
import { ProductGrid } from '@/components/product-grid'

interface ProductDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  // Get related products (same category, different product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const stockStatus = product.stock > 0 ? 'In Stock' : 'Out of Stock'

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link href="/products" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
      </div>

      {/* Product Detail Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-muted rounded-lg overflow-hidden aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <Badge className="w-fit mb-4" variant="secondary">
              {product.category}
            </Badge>

            <h1 className="text-4xl font-bold text-foreground mb-4">
              {product.name}
            </h1>

            <p className="text-muted-foreground text-lg mb-6">
              {product.description}
            </p>

            {/* Price and Stock */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              <Badge className={product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock'}
              </Badge>
            </div>

            {/* Nicotine Warning */}
            {product.nicotineContent && (
              <div className="bg-accent/10 border border-accent rounded-lg p-4 mb-6">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Nicotine Content</p>
                    <p className="text-sm text-muted-foreground">
                      {product.nicotineContent}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      WARNING: This product contains nicotine, which is addictive.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <div className="space-y-4 mb-8">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={product.stock === 0}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                {product.stock === 0 ? 'This item is currently out of stock' : 'Free shipping on orders over $50'}
              </p>
            </div>

            {/* Additional Info */}
            <div className="border-t border-border pt-6 space-y-4">
              <div>
                <p className="font-semibold text-foreground mb-2">Specifications</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Category: {product.category}</li>
                  <li>Product ID: {product.id}</li>
                  <li>Stock Available: {product.stock} units</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-border pt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Related Products
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  )
}
