import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-bordo-600 transition-colors">
                        <Home className="w-4 h-4 mr-2" />
                        Ana Sayfa
                    </Link>
                </li>
                {items.map((item, index) => {
                    // Skip "Ana Sayfa" if items include it explicitly, otherwise just render items.
                    // Usually items start after Home.
                    if (item.url === '/') return null;

                    const isLast = index === items.length - 1;

                    return (
                        <li key={index}>
                            <div className="flex items-center">
                                <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                                {isLast ? (
                                    <span className="ml-1 text-sm font-medium text-bordo-600 md:ml-2">
                                        {item.name}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.url}
                                        className="ml-1 text-sm font-medium text-gray-500 hover:text-bordo-600 md:ml-2 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
