import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import blogDataRaw from "@/data/blog.json";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
}

const blogData = blogDataRaw as BlogPost[];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Yazısı Bulunamadı",
    };
  }

  return {
    title: `${post.title} | AOM Engineering Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts
  const relatedPosts = blogData
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": post.authorRole
    },
    "datePublished": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "AOM Engineering",
      "logo": {
        "@type": "ImageObject",
        "url": "https://angoraotomasyon.com/Küre.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://angoraotomasyon.com/blog/${post.slug}`
    },
    "keywords": post.tags.join(", ")
  };

  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Bloga Dön</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Badge className="mb-4">{post.category}</Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-gray-600 mb-8 pb-8 border-b">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <div>
                <div className="font-semibold text-gray-900">{post.author}</div>
                <div className="text-sm">{post.authorRole}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime} okuma</span>
            </div>
            <button className="flex items-center gap-2 ml-auto text-blue-600 hover:text-blue-700 transition-colors">
              <Share2 className="w-5 h-5" />
              <span>Paylaş</span>
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Card className="border-none shadow-2xl bg-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <article
                className="prose prose-lg max-w-none
                    prose-headings:font-bold prose-headings:tracking-tight
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-blue-100
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-blue-900
                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                    prose-strong:text-gray-900 prose-strong:font-semibold prose-strong:text-blue-900
                    prose-ul:my-6 prose-ul:space-y-3
                    prose-li:text-gray-700 prose-li:leading-relaxed prose-li:pl-2
                    prose-li:marker:text-blue-600
                    prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-700
                    [&>p:first-of-type]:text-xl [&>p:first-of-type]:font-medium [&>p:first-of-type]:text-gray-800 [&>p:first-of-type]:leading-relaxed"
              >
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
                  } else if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                    return (
                      <ul key={index}>
                        {items.map((item, i) => (
                          <li key={i}>{item.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  } else {
                    return <p key={index}>{paragraph}</p>;
                  }
                })}
              </article>

              {/* Call to Action */}
              <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Daha Fazla Bilgi İçin</h3>
                <p className="text-gray-700 mb-6">
                  {post.category} çözümlerimiz hakkında detaylı bilgi almak ve projeleriniz için teklif oluşturmak isterseniz bizimle iletişime geçin.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/iletisim/teklif"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Teklif Al
                  </Link>
                  <Link
                    href="/iletisim/teknik-destek"
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors border-2 border-blue-600"
                  >
                    Teknik Destek
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Etiketler:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8">İlgili Yazılar</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.id} href={`/blog/${related.slug}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 border-none bg-white/90 backdrop-blur-sm h-full cursor-pointer hover:scale-105">
                    <CardContent className="p-6">
                      <Badge className="mb-3">{related.category}</Badge>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {related.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{new Date(related.date).toLocaleDateString('tr-TR')}</span>
                        <span>•</span>
                        <span>{related.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Card className="border-none shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Endüstriyel Otomasyon Çözümleri</h2>
              <p className="text-xl mb-6 text-blue-100">
                PLC, SCADA, robotik sistemler için uzman desteği alın
              </p>
              <Link href="/iletisim">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Teklif Alın
                </button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}