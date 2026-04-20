import { Suspense } from 'react';
import Link from 'next/link';

// Loading component
export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bordo-600"></div>
    </div>
  );
}

// Skeleton for cards
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
      <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
}

// Product card skeleton
export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-200"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

// Grid of skeletons
export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

// Error boundary component
export function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary?: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-4">
          <svg className="mx-auto h-12 w-12 text-bordo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Bir Hata Oluştu</h2>
        <p className="text-gray-600 mb-6">{error.message || 'Beklenmeyen bir hata meydana geldi.'}</p>
        {resetErrorBoundary && (
          <button
            onClick={resetErrorBoundary}
            className="bg-bordo-600 text-white px-6 py-2 rounded-lg hover:bg-bordo-700 transition"
          >
            Tekrar Dene
          </button>
        )}
        <div className="mt-4">
          <Link href="/" className="text-bordo-600 hover:text-bordo-700 font-medium">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}

// Not found component
export function NotFoundFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-bordo-600/20 rounded-full mb-6">
            <span className="text-7xl font-bold text-bordo-600">404</span>
          </div>
        </div>

        {/* Başlık */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Sayfa Bulunamadı
        </h1>

        <p className="text-xl text-gray-400 mb-8">
          Aradığınız sayfa mevcut değil, taşınmış veya silinmiş olabilir.
        </p>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-bordo-600 hover:bg-bordo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Ana Sayfaya Dön</span>
          </Link>

          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/20"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Ürünlere Göz At</span>
          </Link>
        </div>

        {/* Popüler Bağlantılar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 mb-4 text-sm">Popüler Sayfalar:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/kurumsal/hakkimizda" className="text-gray-400 hover:text-bordo-500 transition-colors text-sm">
              Hakkımızda
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/cozumler" className="text-gray-400 hover:text-bordo-500 transition-colors text-sm">
              Çözümler
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/markalarimiz" className="text-gray-400 hover:text-bordo-500 transition-colors text-sm">
              Markalarımız
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/projelerimiz" className="text-gray-400 hover:text-bordo-500 transition-colors text-sm">
              Projelerimiz
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/iletisim" className="text-gray-400 hover:text-bordo-500 transition-colors text-sm">
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Lazy load wrapper
export function LazyLoadWrapper({
  children,
  fallback = <LoadingSpinner />
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}
