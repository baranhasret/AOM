import { NextResponse } from 'next/server';
import { put, list } from '@vercel/blob';
import localProducts from '@/data/products.json';

async function readProducts() {
  try {
    // Vercel Blob'dan güncel ürün listesini oku
    const { blobs } = await list({ prefix: 'db-products.json' });
    const fileInfo = blobs.find(b => b.pathname === 'db-products.json');
    if (fileInfo) {
      // Vercel Blob CDN url'si cache'lenebilir, bu yüzden cache kırmak için timestamp ekliyoruz
      const res = await fetch(fileInfo.url + '?t=' + Date.now(), { cache: 'no-store' });
      return await res.json();
    }
    return localProducts; // Blob boşsa statik veriyi döndür
  } catch (e) {
    return localProducts;
  }
}

async function writeProducts(data: any[]) {
  const jsonData = JSON.stringify(data, null, 2);
  await put('db-products.json', jsonData, {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false
  });
}

export const GET = async () => {
  try {
    const data = await readProducts();
    // Cache'lenmesini engellemek için headers ekliyoruz
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (err) {
    return NextResponse.json([], { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const data = await readProducts();
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
    await writeProducts(data);
    return NextResponse.json(newProduct);
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
};

export const PUT = async (request: Request) => {
  try {
    const body = await request.json();
    let data = await readProducts();
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
    await writeProducts(data);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
};

export const DELETE = async (request: Request) => {
  try {
    const body = await request.json();
    let data = await readProducts();
    data = data.filter((p: any) => p.id !== body.id);
    await writeProducts(data);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
};
