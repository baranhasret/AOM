import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  const data = await request.formData();
  const file = data.get('file') as File;
  if (!file) {
    return NextResponse.json({ error: 'Dosya bulunamadı.' }, { status: 400 });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${Date.now()}_${file.name}`;
  const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);
  await writeFile(filePath, buffer);
  return NextResponse.json({ url: `/uploads/${fileName}` });
}
