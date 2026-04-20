import { NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'data', 'pages.json');

export async function GET() {
  const data = await readFile(filePath, 'utf-8');
  return NextResponse.json(JSON.parse(data));
}

export async function PUT(request: Request) {
  const body = await request.json();
  await writeFile(filePath, JSON.stringify(body, null, 2), 'utf-8');
  return NextResponse.json({ success: true });
}
