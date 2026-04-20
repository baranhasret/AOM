
import Database from 'better-sqlite3';
import { NextResponse } from 'next/server';


const db = new Database('products.db');
db.prepare(`CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  code TEXT,
  image TEXT,
  brand TEXT,
  desc TEXT
)`).run();


export async function GET() {
  const products = db.prepare('SELECT * FROM products').all();
  return NextResponse.json(products);
}


export async function POST(request: Request) {
  const body = await request.json();
  db.prepare('INSERT INTO products (name, code, image, brand, desc) VALUES (?, ?, ?, ?, ?)')
    .run(body.name, body.code, body.image, body.brand, body.desc);
  const products = db.prepare('SELECT * FROM products').all();
  return NextResponse.json(products);
}


export async function PUT(request: Request) {
  const body = await request.json();
  db.prepare('UPDATE products SET name = ?, code = ?, image = ?, brand = ?, desc = ? WHERE id = ?')
    .run(body.name, body.code, body.image, body.brand, body.desc, body.id);
  return NextResponse.json({ success: true });
}


export async function DELETE(request: Request) {
  const body = await request.json();
  db.prepare('DELETE FROM products WHERE id = ?').run(body.id);
  return NextResponse.json({ success: true });
}
