import { ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "5 Ways to Track Your Mood Daily",
    readTime: "4 min read",
    date: "Nov 15, 2025",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Guided Meditations for Stress Relief",
    readTime: "5 min read",
    date: "Nov 15, 2025",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Building Mindful Habits That Stick",
    readTime: "6 min read",
    date: "Nov 15, 2025",
    image: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?q=80&w=800&auto=format&fit=crop"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="w-full py-32 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Our Latest Blog
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Explore our latest blog posts for mindful tips, habit-building strategies, and practical insights to enhance daily wellness.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="bg-[#121212] rounded-[24px] p-4 flex flex-col border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] group"
            >
              {/* Image */}
              <div className="w-full h-[220px] rounded-[16px] overflow-hidden mb-5">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-2 pb-2">
                
                {/* Badge */}
                <div className="inline-block bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-md rounded-lg px-3 py-1.5 text-xs text-white/90 shadow-sm w-fit mb-4">
                  {blog.readTime}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-medium text-white/90 leading-snug mb-8">
                  {blog.title}
                </h3>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between text-xs text-gray-400 border-t border-white/5 pt-4">
                  <span>{blog.date}</span>
                  <a href="#" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors group/link">
                    Read More 
                    <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <button className="group relative overflow-hidden bg-gradient-to-r from-brand-400 to-brand-500 text-black font-medium py-3 px-8 rounded-xl shadow-lg shadow-brand-500/25 cursor-pointer">
            <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[200%]">
              View all blog
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[200%] group-hover:translate-y-0">
              View all blog
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
