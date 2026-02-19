import Link from 'next/link'
import { ArrowRight, Star, Shield, Truck, HeadphonesIcon, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductGrid } from '@/components/product-grid'
import { products } from '@/lib/products'

export default function Home() {
  // Get featured products (first 6)
  const featuredProducts = products.slice(0, 6)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-red-950 dark:via-red-900 dark:to-red-950" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-red-200/30 dark:bg-red-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-100/30 dark:bg-red-900/20 rounded-full blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Premium Vaping Experience
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Welcome to <span className="text-red-600">Red Apple</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Discover our curated selection of premium vaping devices, e-liquids, and accessories. Quality guaranteed for the discerning vaper.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/products">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all text-base px-8">
                    Shop Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" size="lg" className="border-red-200 text-red-700 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/30 text-base px-8">
                    View Collection
                  </Button>
                </Link>
              </div>
              
              {/* Trust badges */}
              <div className="mt-10 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">Trusted by 10,000+ customers</p>
                <div className="flex items-center justify-center lg:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm font-medium text-foreground">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image Placeholder */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Decorative card mockups */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-3xl shadow-2xl rotate-3 opacity-90" />
                <div className="absolute inset-0 bg-white dark:bg-card rounded-3xl shadow-2xl -rotate-2 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🍎</span>
                    </div>
                    <p className="text-muted-foreground">Premium Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-card border-y border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Authentic Products</h4>
                <p className="text-sm text-muted-foreground">100% genuine</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Free Shipping</h4>
                <p className="text-sm text-muted-foreground">On orders $50+</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <HeadphonesIcon className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">24/7 Support</h4>
                <p className="text-sm text-muted-foreground">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Fast Delivery</h4>
                <p className="text-sm text-muted-foreground">2-4 business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Premium Selection</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked favorites from our collection, chosen for quality and customer satisfaction
          </p>
        </div>

        <ProductGrid products={featuredProducts} />

        <div className="text-center mt-12">
          <Link href="/products">
            <Button variant="outline" size="lg" className="border-red-200 text-red-700 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/30 px-8">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-card border-t border-b border-border py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              The Red Apple Difference
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're committed to providing the best vaping experience with quality products and exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background dark:bg-background/50 rounded-2xl p-8 border border-border hover:border-red-200 dark:hover:border-red-800 transition-colors">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/20 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Quality Assurance
              </h3>
              <p className="text-muted-foreground">
                Every product is carefully selected and tested for quality, authenticity, and performance. We stand behind everything we sell.
              </p>
            </div>

            <div className="bg-background dark:bg-background/50 rounded-2xl p-8 border border-border hover:border-red-200 dark:hover:border-red-800 transition-colors">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/20 rounded-2xl flex items-center justify-center mb-6">
                <Truck className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Fast & Free Shipping
              </h3>
              <p className="text-muted-foreground">
                Enjoy free shipping on orders over $50 with fast 2-4 day delivery. Track your order every step of the way.
              </p>
            </div>

            <div className="bg-background dark:bg-background/50 rounded-2xl p-8 border border-border hover:border-red-200 dark:hover:border-red-800 transition-colors">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/20 rounded-2xl flex items-center justify-center mb-6">
                <HeadphonesIcon className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Expert Support
              </h3>
              <p className="text-muted-foreground">
                Our knowledgeable team is here to help you find the perfect products. Get expert advice on devices, e-liquids, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-red-600 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
            Subscribe to get exclusive deals, new product announcements, and vaping tips directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-red-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button size="lg" className="bg-white text-red-700 hover:bg-red-50 px-8">
              Subscribe
            </Button>
          </div>
          <p className="text-red-200 text-sm mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  )
}
