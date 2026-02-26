
"use client";
import React, { useState, useEffect } from 'react';

function ProductManager() {
  const [openBrand, setOpenBrand] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Array<{id:number; name:string; code:string; image:string; brand:string; desc:string; category:string}>>([]);
  // Ürünleri API'den yükle
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [image, setImage] = useState<File | string>('');
  const [brand, setBrand] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');

  const brandOptions = [
    {
      name: 'Autonics',
      categories: [
        'Sensörler', 'Sıcaklık Kontrol Cihazları', 'Zaman Röleleri', 'Sayıcılar', 'Proximity Switch', 'Encoderlar', 'PLC', 'SSR', 'Güç Kaynakları', 'Panel Metreler', 'Seviye Sensörleri', 'Basınç Sensörleri', 'Akış Sensörleri', 'Aksesuarlar'
      ]
    },
    {
      name: 'Inovance',
      categories: ['PLC', 'HMI', 'Servo Sürücü', 'Frekans İnvertörü', 'Motion Controller', 'I/O Modüller', 'Aksesuarlar']
    },
    {
      name: 'Yaskawa',
      categories: ['Servo Sürücü', 'Robot', 'Frekans İnvertörü', 'Motion Controller', 'Aksesuarlar']
    },
    {
      name: 'Delta',
      categories: ['PLC', 'HMI', 'Servo Sürücü', 'Frekans İnvertörü', 'Güç Kaynağı', 'Aksesuarlar']
    },
    {
      name: 'Omron',
      categories: ['Sensörler', 'PLC', 'HMI', 'Zaman Röleleri', 'Sayıcılar', 'SSR', 'Aksesuarlar']
    },
    {
      name: 'SMC',
      categories: ['Pnömatik', 'Valf', 'Silindir', 'Regülatör', 'Aksesuarlar']
    },
    {
      name: 'Siemens',
      categories: ['PLC', 'HMI', 'Servo Sürücü', 'Frekans İnvertörü', 'Aksesuarlar']
    }
  ];

  const selectedBrandObj = brandOptions.find(b => b.name === brand);
  const categoryOptions = selectedBrandObj ? selectedBrandObj.categories : [];
  const [editId, setEditId] = useState<number|null>(null);
  const [uploading, setUploading] = useState(false);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !code || !brand || !category) return;
    let imageUrl = image;
    if (image && typeof image !== 'string') {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', image);
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      imageUrl = data.url;
      setUploading(false);
    }
    const method = editId !== null ? 'PUT' : 'POST';
    const url = '/api/products';
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editId !== null ? { id: editId, name, code, image: imageUrl, brand, desc, category } : { name, code, image: imageUrl, brand, desc, category }),
    });
    const newProduct = await res.json();
    if (editId !== null) {
      setProducts(products.map(p => p.id === editId ? newProduct : p));
      setEditId(null);
    } else {
      setProducts([...products, newProduct]);
    }
    setName('');
    setCode('');
    setImage('');
    setBrand('');
    setDesc('');
    setCategory('');
  };

  const handleEdit = (id:number) => {
    const prod = products.find(p => p.id === id);
    if (prod) {
      setName(prod.name);
      setCode(prod.code);
      setImage(''); // Dosya inputu için boş bırakıyoruz
      setBrand(prod.brand);
      setDesc(prod.desc);
      setCategory(prod.category);
      setEditId(id);
    }
  };

  const handleDelete = async (id:number) => {
    await fetch('/api/products', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setProducts(products.filter(p => p.id !== id));
    if (editId === id) {
      setEditId(null);
      setName('');
      setCode('');
      setImage('');
      setBrand('');
      setDesc('');
      setCategory('');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-center">Ürün Yönetimi</h2>
      <form onSubmit={handleAdd} className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          placeholder="Ürün Adı"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          placeholder="Ürün Kodu"
          value={code}
          onChange={e => setCode(e.target.value)}
          className="border rounded px-3 py-2"
          required
        />
        <select
          value={brand}
          onChange={e => { setBrand(e.target.value); setCategory(''); }}
          className="border rounded px-3 py-2"
          required
        >
          <option value="">Marka Seçiniz</option>
          {brandOptions.map(b => (
            <option key={b.name} value={b.name}>{b.name}</option>
          ))}
        </select>
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="border rounded px-3 py-2"
          required
          disabled={!brand}
        >
          <option value="">Kategori Seçiniz</option>
          {categoryOptions.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="file"
          accept="image/*"
          onChange={e => setImage(e.target.files?.[0] || '')}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Açıklama"
          value={desc}
          onChange={e => setDesc(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <button type="submit" className="bg-green-600 text-white py-2 rounded font-semibold" disabled={uploading}>
          {uploading ? 'Yükleniyor...' : (editId !== null ? 'Güncelle' : 'Ekle')}
        </button>
      </form>
      {/* Marka ve kategoriye göre gruplama */}
      <div className="space-y-4">
        {(() => {
          const grouped: Record<string, Record<string, any[]>> = {};
          products.forEach((prod: any) => {
            const brand = prod.brand || 'Diğer';
            const category = prod.category || 'Diğer';
            if (!grouped[brand]) grouped[brand] = {};
            if (!grouped[brand][category]) grouped[brand][category] = [];
            grouped[brand][category].push(prod);
          });
          return Object.entries(grouped).map(([brand, cats]) => (
            <div key={brand}>
              <button
                className={`w-full text-left px-6 py-3 rounded-lg font-bold text-lg shadow border mb-2 transition-all ${openBrand === brand ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-50'}`}
                onClick={() => {
                  setOpenBrand(openBrand === brand ? null : brand);
                  setOpenCategory(null);
                }}
              >
                {brand}
              </button>
              {openBrand === brand && (
                <div className="pl-4">
                  {Object.entries(cats).map(([cat, items]) => (
                    <div key={cat}>
                      <button
                        className={`w-full text-left px-4 py-2 rounded font-semibold shadow border mb-2 transition-all ${openCategory === cat ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-50'}`}
                        onClick={() => setOpenCategory(openCategory === cat ? null : cat)}
                      >
                        {cat}
                      </button>
                      {openCategory === cat && (
                        <ul className="space-y-2 mb-4">
                          {items.map((prod: any) => (
                            <li key={prod.id} className="border rounded p-3 flex justify-between items-center bg-white">
                              <div className="flex items-center gap-2">
                                {prod.image && <img src={prod.image} alt={prod.name} className="h-10 w-10 object-cover rounded" />}
                                <span className="font-bold">{prod.name}</span>
                                <span className="ml-2 text-gray-500">Kod: {prod.code}</span>
                                {prod.desc && <span className="ml-2 text-gray-500">{prod.desc}</span>}
                              </div>
                              <div className="flex gap-2">
                                <button onClick={() => handleEdit(prod.id)} className="bg-blue-500 text-white px-2 py-1 rounded">Düzenle</button>
                                <button onClick={() => handleDelete(prod.id)} className="bg-bordo-500 text-white px-2 py-1 rounded">Sil</button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ));
        })()}
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'angora' && password === 'Aom2025') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Kullanıcı adı veya şifre yanlış!');
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md flex flex-col">
          <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full">
            <h1 className="text-2xl font-bold mb-4 text-center">Admin Paneli</h1>
            <input
              type="text"
              placeholder="Kullanıcı Adı"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="border rounded px-3 py-2"
              required
            />
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="border rounded px-3 py-2"
              required
            />
            <button type="submit" className="bg-blue-600 text-white py-2 rounded font-semibold">Giriş Yap</button>
            {error && <p className="text-bordo-500 text-center">{error}</p>}
          </form>
        </div>
      </main>
    );
  }

  // Sadece ürün yönetimi arayüzü
  return (
    <main className="min-h-screen w-full bg-gray-100 flex flex-col">
      <header className="bg-white shadow flex items-center px-8 py-4 justify-between">
        <h1 className="text-2xl font-bold">Ürün Yönetimi</h1>
        <span className="text-gray-500">Hoşgeldiniz, Admin</span>
      </header>
      <section className="flex-1 p-8 overflow-y-auto">
        <div className="bg-white rounded-lg shadow p-8 max-w-3xl mx-auto">
          <ProductManager />
        </div>
      </section>
    </main>
  );
// ...existing code...
}