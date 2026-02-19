import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  category: string;
  nicotineContent: string;
  url: string;
}

const VAPERANGER_BASE = 'https://vaperanger.com';

async function crawlProduct(url: string): Promise<Product | null> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!response.ok) return null;
    
    const html = await response.text();
    const $ = cheerio.load(html);
    
    // Get product name
    const name = $('.productView-title').text().trim();
    if (!name) return null;
    
    // Get price - try multiple selectors
    let priceText = $('.price--withoutTax').first().text().trim() || 
                   $('.price--withTax').first().text().trim() ||
                   $('.price--non-sale').first().text().trim() || 
                   $('.price--rrp').first().text().trim() ||
                   $('.price').first().text().trim() || '';
    const price = parseFloat(priceText.replace(/[^0-9.]/g, '')) || 0;
    
// Get image - try to get highest resolution (1280w or original)
    let image = $('.productView-image img').attr('src') || 
                $('.productView-image img').attr('data-src') || '';
    
    // Upgrade image to higher resolution (replace 160w with 1280w)
    if (image.includes('stencil')) {
      image = image.replace('/160w/', '/1280w/');
    }
    
// Get description
    const description = ($('.productView-description').text().trim().slice(0, 200) || 
                       `Premium ${name}`).replace(' from VapeRanger', '');
    
    // Generate ID from URL
    const urlParts = url.split('/');
    const slug = urlParts[urlParts.length - 1];
    const id = slug.replace(/-/g, '');
    
    return {
      id,
      name,
      description,
      price,
      image: image.startsWith('http') ? image : VAPERANGER_BASE + image,
      stock: 50,
      category: 'E-Liquids',
      nicotineContent: '0mg - 50mg available',
      url
    };
  } catch (error) {
    console.error(`Error crawling ${url}:`, error);
    return null;
  }
}

async function getProductList(): Promise<string[]> {
  const productUrls: string[] = [];
  
  // Try multiple pages
  const pages = [
    '/eliquid/?sort=alphaasc',
    '/eliquid/?page=1',
    '/eliquid/?page=2'
  ];
  
  for (const page of pages) {
    try {
      const response = await fetch(VAPERANGER_BASE + page, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      const html = await response.text();
      const $ = cheerio.load(html);
      
      // Find product links - look for links containing /products/
      $('a[href*="/products/"]').each((_, elem) => {
        const href = $(elem).attr('href');
        if (href && !href.includes('?')) {  // Skip query links
          const fullUrl = href.startsWith('http') ? href : VAPERANGER_BASE + href;
          if (!productUrls.includes(fullUrl)) {
            productUrls.push(fullUrl);
          }
        }
      });
      
      console.log(`Found ${productUrls.length} products so far from ${page}`);
    } catch (error) {
      console.error(`Error fetching ${page}:`, error);
    }
  }
  
  return [...new Set(productUrls)];
}

async function crawlAllProducts() {
  console.log('Starting VapeRanger product crawl...');
  
  // Get list of all product URLs
  const productUrls = await getProductList();
  console.log(`Found ${productUrls.length} unique product URLs`);
  
// Crawl each product
  const products: Product[] = [];
  const limit = productUrls.length; // Crawl all products
  
  for (let i = 0; i < Math.min(productUrls.length, limit); i++) {
    console.log(`Crawling product ${i + 1}/${Math.min(productUrls.length, limit)}: ${productUrls[i]}`);
    const product = await crawlProduct(productUrls[i]);
    if (product) {
      products.push(product);
      console.log(`  -> ${product.name} - $${product.price}`);
    }
  }
  
  // Save to JSON file
  const outputPath = path.join(process.cwd(), 'data', 'products.json');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));
  
  console.log(`\nCrawled ${products.length} products`);
  console.log(`Saved to ${outputPath}`);
  
  return products;
}

// Run the crawler
crawlAllProducts().catch(console.error);

