import Link from 'next/link'
import { ArrowRight, Star, Shield, Truck, HeadphonesIcon, Zap, Phone, Mail, MapPin, ChevronRight, Sparkles, Award, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductGrid } from '@/components/product-grid'
import { products } from '@/lib/products'

export default function Home() {
  // Get featured products
  const featuredProducts = products.slice(0, 8)
  const newArrivals = products.slice(4, 12)

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative w-full">
        {/* Background with layered effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-red-950" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-800/20 rounded-full blur-[100px]" />
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/10 backdrop-blur-sm border border-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Premium Vaping Supplies
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Trusted <span className="text-red-500">Red Apple</span> Vape Store
            </h1>
            
            <p className="text-slate-300 text-xl mb-8 max-w-2xl leading-relaxed">
              Discover premium vaping products at wholesale prices. Fast shipping, authentic products, and 24/7 customer support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/products">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/25 transition-all text-base group">
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 text-base bg-transparent/50 backdrop-blur-sm">
                  Browse Catalog
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-700/50">
              <div>
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-slate-400 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-slate-400 text-sm">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">4.9</div>
                <div className="text-slate-400 text-sm">Star Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Trust Badges */}
      <section className="bg-card border-y border-border py-8 -mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Authentic Products', desc: '100% Genuine' },
              { icon: Truck, title: 'Free Shipping', desc: 'Orders $50+' },
              { icon: HeadphonesIcon, title: '24/7 Support', desc: 'Always Here' },
              { icon: Zap, title: 'Fast Delivery', desc: '2-4 Days' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-500/20">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Shop Categories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Browse by Category</h2>
          </div>
          <Link href="/products" className="hidden md:flex items-center gap-2 text-red-600 font-medium hover:gap-3 transition-all">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Vape Devices', slug: 'devices', emoji: '🔌', count: '120+' },
            { name: 'E-Liquids', slug: 'e-liquids', emoji: '🧴', count: '250+' },
            { name: 'Disposables', slug: 'disposables', emoji: '📱', count: '80+' },
            { name: 'Accessories', slug: 'accessories', emoji: '🛠️', count: '150+' },
          ].map((cat, i) => (
            <Link 
              key={i}
              href="/products"
              className="group bg-card border-2 border-border rounded-2xl p-6 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/20 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {cat.emoji}
              </div>
              <h3 className="font-bold text-foreground group-hover:text-red-600 transition-colors">
                {cat.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{cat.count} Products</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gradient-to-b from-card to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4" />
                Top Picks
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Featured Products</h2>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-red-600 font-medium hover:gap-3 transition-all">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <ProductGrid products={featuredProducts} />

          <div className="mt-10 text-center md:hidden">
            <Link href="/products">
              <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                View All Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Just Landed
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">New Arrivals</h2>
          </div>
          <Link href="/products" className="hidden md:flex items-center gap-2 text-red-600 font-medium hover:gap-3 transition-all">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <ProductGrid products={newArrivals} />
      </section>

      {/* Why Choose Us */}
      <section className="bg-card border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">The Red Apple Promise</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">We're committed to providing the best vaping experience with quality products and exceptional service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Quality Guaranteed', desc: 'Every product is authentic and tested. We stand behind everything we sell with a 100% satisfaction guarantee.' },
              { icon: Truck, title: 'Fast & Free Shipping', desc: 'Free shipping on orders over $50. Fast 2-4 day delivery with order tracking.' },
              { icon: HeadphonesIcon, title: 'Expert Support', desc: 'Our knowledgeable team is here to help. Get expert advice on devices, e-liquids, and more.' },
            ].map((item, i) => (
              <div key={i} className="bg-background rounded-2xl p-8 border border-border hover:border-red-300 dark:hover:border-red-800 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 group">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-red-600/30 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Don't Miss Out!</h2>
          <p className="text-slate-300 mb-8 text-lg">Subscribe to get exclusive deals, flash sales, and new product alerts.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-slate-600 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent backdrop-blur-sm"
            />
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 shadow-lg shadow-red-600/25">
              Subscribe
            </Button>
          </div>
          <p className="text-slate-500 text-sm mt-4">No spam, unsubscribe anytime.</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: 'Phone', info: '1-800-RED-APPLE', desc: 'Mon-Fri: 9AM-6PM EST' },
              { icon: Mail, title: 'Email', info: 'info@redapple.com', desc: '24/7 Support' },
              { icon: MapPin, title: 'Location', info: 'United States', desc: 'Fast Shipping Nationwide' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 p-5 rounded-2xl hover:bg-muted/50 transition-colors">
                <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{item.title}</h4>
                  <p className="font-medium text-foreground">{item.info}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
