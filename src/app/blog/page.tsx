import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import blogData from "@/data/blog.json";

export const metadata: Metadata = {
  title: "Blog - Endüstriyel Otomasyon Rehberleri | AOM Engineering",
  description: "PLC, SCADA, HMI, robotik sistemler hakkında detaylı makaleler. Endüstriyel otomasyon dünyasında uzman görüşleri ve teknik rehberler.",
  keywords: "otomasyon blog, plc rehberi, hmi nedir, scada sistemi, endüstriyel robot, otomasyon makaleleri",
  openGraph: {
    title: "Blog - AOM Engineering",
    description: "Endüstriyel otomasyon dünyasından en güncel içerikler.",
    type: "website",
  },
};

export default function BlogPage() {
  const categories = [...new Set(blogData.map(post => post.category))];
  
  return (
    <>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-32 pb-20 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-bordo-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-bordo-500 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-bordo-600 rounded-2xl mb-6 mx-auto">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Endüstriyel Otomasyon Rehberi
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                PLC, SCADA, robotik sistemler ve daha fazlası hakkında uzman görüşleri ve teknik içerikler
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="px-6 py-2 text-sm font-medium bg-bordo-600 text-white rounded-lg hover:bg-bordo-700 transition-colors">
                Tümü ({blogData.length})
              </button>
              {categories.map((category) => {
                const count = blogData.filter(post => post.category === category).length;
                return (
                  <button 
                    key={category}
                    className="px-6 py-2 text-sm font-medium bg-white text-gray-700 rounded-lg border border-gray-200 hover:border-bordo-500 hover:text-bordo-600 transition-colors"
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogData.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500 bg-white h-full cursor-pointer">
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden rounded-t-xl">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-20 h-20 text-white/20" />
                      </div>
                      <div className="absolute top-4 right-4 bg-bordo-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-bordo-600 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center text-bordo-600 font-semibold group-hover:gap-3 transition-all">
                        <span>Devamını Oku</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-48 h-48 bg-bordo-600 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-bordo-500 rounded-full opacity-10 blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4">Projeniz İçin Destek mi Gerekiyor?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Uzman ekibimiz endüstriyel otomasyon çözümlerinizde size yardımcı olmaya hazır
                </p>
                <Link href="/iletisim">
                  <button className="bg-bordo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-bordo-700 transition-colors text-lg">
                    Bize Ulaşın
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}