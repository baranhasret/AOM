import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file = data.get('file') as File;
    if (!file) {
      return NextResponse.json({ error: 'Dosya bulunamadı.' }, { status: 400 });
    }
    
    // Dosya ismini benzersiz yapalım
    const uniqueFileName = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
    
    // Upload the file to Vercel Blob
    const blob = await put(uniqueFileName, file, { 
      access: 'public',
      addRandomSuffix: true 
    });
    
    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error('Blob upload error:', error);
    return NextResponse.json({ error: 'Yükleme hatası oluştu' }, { status: 500 });
  }
}
