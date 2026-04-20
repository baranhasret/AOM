import { NextResponse } from 'next/server';
import { put, list, del } from '@vercel/blob';
import localProducts from '@/data/products.json';

// Sitenin her yerinden garantili dinamik tepki almak için
export const dynamic = 'force-dynamic';

async function readProducts() {
  try {
    // Vercel Blob'dan güncel ürün listesini oku (prefix: db-products)
    const { blobs } = await list({ prefix: 'db-products' });
    
    // En son yüklenen dosyayı bul (Tarihe göre sırala ve ilkini al)
    const sortedBlobs = blobs.sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime());
    
    if (sortedBlobs.length > 0) {
      const fileInfo = sortedBlobs[0];
      const res = await fetch(fileInfo.url, { cache: 'no-store' });
      return await res.json();
    }
    return localProducts; // Blob boşsa statik veriyi döndür
  } catch (e) {
    return localProducts;
  }
}

async function writeProducts(data: any[]) {
  const jsonData = JSON.stringify(data, null, 2);
  
  // Önce eski dosyaları bulup sil (yer kaplamasın)
  const { blobs } = await list({ prefix: 'db-products' });
  if (blobs.length > 0) {
    const urlsToDelete = blobs.map(b => b.url);
    await del(urlsToDelete);
  }

  // Yeni dosyayı yeni benzersiz bir URL ile yükle (addRandomSuffix varsayılan olarak true)
  await put('db-products.json', jsonData, {
    access: 'public',
    contentType: 'application/json'
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
