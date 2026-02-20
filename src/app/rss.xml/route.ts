import { NextResponse } from 'next/server';
import blogData from '@/data/blog.json';

export async function GET() {
  const baseUrl = 'https://angoraotomasyon.com';
  
  const blogPosts = blogData.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>info@angoraotomasyon.com (${post.author})</author>
      <category>${post.category}</category>
      ${post.tags.map(tag => `<category>${tag}</category>`).join('\n      ')}
    </item>
  `).join('\n');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AOM Engineering Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Endüstriyel otomasyon, PLC programlama, SCADA sistemleri ve robotik teknolojiler hakkında güncel yazılar</description>
    <language>tr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <managingEditor>info@angoraotomasyon.com (AOM Engineering)</managingEditor>
    <webMaster>info@angoraotomasyon.com (AOM Engineering)</webMaster>
    ${blogPosts}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
