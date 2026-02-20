import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { cache, withRateLimit } from '@/lib/cache';

const productsFile = path.join(process.cwd(), 'src/data/products.json');
const CACHE_KEY = 'products_list';
const CACHE_TTL = 300; // 5 minutes

function readProducts() {
  return fs.existsSync(productsFile)
    ? JSON.parse(fs.readFileSync(productsFile, 'utf-8'))
    : [];
}

function writeProducts(data: any[]) {
  fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));
  // Invalidate cache when products are updated
  cache.delete(CACHE_KEY);
}

export const GET = withRateLimit(async () => {
  try {
    // Check cache first
    const cachedData = cache.get<any[]>(CACHE_KEY);
    if (cachedData) {
      return NextResponse.json(cachedData, {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
          'X-Cache': 'HIT',
        },
      });
    }

    // If not in cache, read from file
    const data = readProducts();
    cache.set(CACHE_KEY, data, CACHE_TTL);
    
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        'X-Cache': 'MISS',
      },
    });
  } catch (err) {
    return NextResponse.json([], { status: 500 });
  }
});

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const data = readProducts();
    const newProduct = {
      id: Date.now(),
      name: body.name,
      code: body.code,
      image: body.image,
      brand: body.brand,
      desc: body.desc,
      category: body.category || ''
    };
    data.push(newProduct);
    writeProducts(data);
    return NextResponse.json(newProduct);
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
};

export const PUT = async (request: Request) => {
  try {
    const body = await request.json();
    let data = readProducts();
    data = data.map((p: any) =>
      p.id === body.id
        ? {
            ...p,
            name: body.name,
            code: body.code,
            image: body.image,
            brand: body.brand,
            desc: body.desc,
            category: body.category || ''
          }
        : p
    );
    writeProducts(data);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
};

export const DELETE = async (request: Request) => {
  try {
    const body = await request.json();
    let data = readProducts();
  data = data.filter((p: any) => p.id !== body.id);
    writeProducts(data);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
};
