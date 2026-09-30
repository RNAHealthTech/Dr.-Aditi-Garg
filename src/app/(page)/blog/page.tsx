import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Dr. Aditi Garg',
  description: 'Read the latest articles on ENT health and wellness by Dr. Aditi Garg.',
};

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Sinusitis: Causes, Symptoms, and Treatment',
    excerpt: 'Sinusitis is a common condition that affects millions of people every year. Learn about the early signs and how advanced endoscopic procedures can help you breathe easier.',
    date: 'Oct 15, 2024',
    readTime: '5 min read',
    category: 'Sinus Health',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Protecting Your Hearing in a Noisy World',
    excerpt: 'Noise-induced hearing loss is preventable. Discover practical tips to protect your ears and when you should consult an ENT specialist for a hearing check-up.',
    date: 'Sep 28, 2024',
    readTime: '4 min read',
    category: 'Ear Care',
    imageUrl: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Tonsillitis in Children: When is Surgery Necessary?',
    excerpt: 'Recurrent tonsillitis can disrupt your child\'s life and sleep. We discuss the medical guidelines for tonsillectomy and what to expect during recovery.',
    date: 'Aug 10, 2024',
    readTime: '6 min read',
    category: 'Pediatric ENT',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
  }
];

export default function BlogPage() {
  return (
    <div className="bg-[#faf9f7] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#0e4e50] bg-[#e6f0ef] px-3 py-1.5 rounded-full inline-block mb-4">
            Insights &amp; Updates
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0d3033] mb-6">
            Latest From Our Blog
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 text-[15px] leading-relaxed">
            Stay informed with expert advice, latest treatments, and patient care tips from Dr. Aditi Garg for maintaining optimal ear, nose, and throat health.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-sm border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#0e4e50] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-sm shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[12px] text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-[18px] font-bold text-[#0d3033] mb-3 leading-snug group-hover:text-[#0e4e50] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-[14px] text-slate-600 leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <Link 
                  href="#" 
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0e4e50] group/btn mt-auto"
                >
                  Read Article
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
