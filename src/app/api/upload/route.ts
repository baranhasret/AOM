import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file = data.get('file') as File;
    if (!file) {
      return NextResponse.json({ error: 'Dosya bulunamadı.' }, { status: 400 });
    }
    
    // Upload the file to Vercel Blob
    const blob = await put(file.name, file, { access: 'public' });
    return NextResponse.json({ url: blob.url });
  } catch (error) {
    return NextResponse.json({ error: 'Yükleme hatası oluştu' }, { status: 500 });
  }
}
