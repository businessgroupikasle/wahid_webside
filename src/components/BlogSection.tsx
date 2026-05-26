"use client";

import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Blog = {
  id: number;
  title: string;
  image: string;
  content?: { heading: string; body: string }[];
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Why Learning the 99 Names of Allah Can Transform Your Daily Life",
    image: "/blog/blog1.svg",
    content: [
      {
        heading: "",
        body: "The 99 Names of Allah are more than words to memorize — they are a path to understanding the mercy, wisdom, power, and love of Allah in a deeper way. Every Name carries meaning that can strengthen faith, bring peace to the heart, and guide daily life."
      },
      {
        heading: "",
        body: "When you learn names like Ar-Rahman (The Most Merciful) and Al-Wakeel (The Trustee), you begin to reflect on Allah's qualities in moments of happiness, stress, and uncertainty. These Names remind us that Allah is always near, always listening, and always aware of our struggles."
      },
      {
        heading: "",
        body: "Many people try to memorize the Names, but true connection comes through understanding their meanings and reflecting on them regularly. Even learning one Name a day can create a meaningful spiritual habit."
      },
      {
        heading: "",
        body: "With the Noor app, learning becomes simple and engaging. You can explore Arabic pronunciation, meanings, Quranic references, and interactive quizzes designed to help you remember and reflect."
      },
      {
        heading: "",
        body: "Whether you are beginning your journey or deepening your Islamic knowledge, the 99 Names of Allah can become a source of comfort and guidance every single day."
      }
    ]
  },
  {
    id: 2,
    title: "A Simple Way to Memorize the 99 Names of Allah",
    image: "/blog/blog2.svg",
    content: [
      {
        heading: "",
        body: "Memorizing the 99 Names of Allah may seem difficult at first, but with the right method, it can become an enjoyable and rewarding journey."
      },
      {
        heading: "",
        body: "The key is consistency, not speed. Instead of trying to memorize all the Names quickly, focus on learning a few at a time. Start by listening to pronunciation, understanding the meaning, and repeating the Name throughout the day."
      },
      {
        heading: "Here are a few simple tips:",
        body: "• Learn 1–3 Names daily\n• Read the meanings carefully\n• Listen to the pronunciation repeatedly\n• Connect the Name to daily life situations\n• Use quizzes and revision regularly"
      },
      {
        heading: "",
        body: "For example, when learning As-Salaam (The Source of Peace), reflect on moments where you seek calmness and peace in life. This helps create emotional connection, making memorization easier."
      },
      {
        heading: "",
        body: "The Noor app is designed to make this process smooth and interactive. With audio pronunciation, progress tracking, favorites, and quizzes, you can build a strong habit without feeling overwhelmed."
      },
      {
        heading: "",
        body: "Remember, the goal is not only memorization — it is understanding and living with the remembrance of Allah every day."
      }
    ]
  },
  {
    id: 3,
    title: "The Beauty and Meaning Behind the 99 Names of Allah",
    image: "/blog/blog3.svg",
    content: [
      {
        heading: "",
        body: "Each of the 99 Names of Allah reveals a unique attribute of the Creator. Together, they help Muslims understand Allah with greater love, hope, and trust."
      },
      {
        heading: "",
        body: "Some Names remind us of Allah's mercy, such as Ar-Raheem (The Most Compassionate). Others remind us of His strength and power, like Al-Qawiyy (The All-Strong). Names such as Al-Ghaffar (The Constant Forgiver) inspire hope and repentance."
      },
      {
        heading: "",
        body: "Learning these Names is not only an act of knowledge — it is an act of worship. The Prophet Muhammad ﷺ taught the importance of knowing and understanding the Names of Allah."
      },
      {
        heading: "",
        body: "In today's busy world, many people struggle to find time for consistent Islamic learning. That is why Noor was created — to make learning accessible, beautiful, and engaging for everyone."
      },
      {
        heading: "With features like:",
        body: "• Arabic transliteration\n• Authentic references\n• Quranic mentions\n• Audio pronunciation\n• Offline access\n• Interactive learning tools"
      },
      {
        heading: "",
        body: "Noor helps users connect spiritually while learning at their own pace."
      },
      {
        heading: "",
        body: "The more you learn about Allah's Names, the more your heart grows in faith, gratitude, and peace."
      }
    ]
  }
];

export default function BlogSection() {
  const [activeBlog, setActiveBlog] = useState<Blog | null>(null);
  const [showAll, setShowAll] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <>
      <section id="blog" className="w-full py-32 bg-[#020617] text-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Our Latest Blog
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Explore our latest blog posts for mindful tips, habit-building strategies, and practical insights to enhance daily wellness.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={itemVariants}
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

                  {/* Title */}
                  <h3 className="text-sm md:text-base font-medium text-white/90 leading-snug mb-8">
                    {blog.title}
                  </h3>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-end text-xs text-gray-400 border-t border-white/5 pt-4">
                    <button
                      onClick={() => blog.content && setActiveBlog(blog)}
                      className={`flex items-center gap-1.5 transition-colors group/link ${
                        blog.content
                          ? "text-gray-300 hover:text-white cursor-pointer"
                          : "text-gray-600 cursor-not-allowed"
                      }`}
                    >
                      Read More
                      <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="group relative overflow-hidden bg-gradient-to-r from-brand-400 to-brand-500 text-black font-medium py-3 px-8 rounded-xl shadow-lg shadow-brand-500/25 cursor-pointer"
            >
              <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[200%]">
                View all blog
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[200%] group-hover:translate-y-0">
                View all blog
              </span>
            </button>
          </motion.div>

        </div>
      </section>

      {/* All Blogs Modal */}
      <AnimatePresence>
        {showAll && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAll(false)}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none"
            >
              <motion.div
                className="relative bg-[#0a0a0a] border border-white/10 rounded-[28px] w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto shadow-2xl"
                initial={{ opacity: 0, scale: 0.95, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-white/8 flex-shrink-0">
                  <h2 className="text-xl md:text-2xl font-semibold text-white">All Blogs</h2>
                  <button
                    onClick={() => setShowAll(false)}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full p-2 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Blog Grid */}
                <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {blogs.map((blog) => (
                      <motion.div
                        key={blog.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="bg-[#121212] rounded-[20px] p-4 flex flex-col border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] group"
                      >
                        <div className="w-full h-[180px] rounded-[14px] overflow-hidden mb-4">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex flex-col flex-1 px-1 pb-1">
                          <h3 className="text-sm font-medium text-white/90 leading-snug mb-6">
                            {blog.title}
                          </h3>
                          <div className="mt-auto flex items-center justify-end border-t border-white/5 pt-3">
                            <button
                              onClick={() => {
                                if (blog.content) {
                                  setShowAll(false);
                                  setActiveBlog(blog);
                                }
                              }}
                              className={`flex items-center gap-1.5 text-xs transition-colors group/link ${
                                blog.content
                                  ? "text-gray-300 hover:text-white cursor-pointer"
                                  : "text-gray-600 cursor-not-allowed"
                              }`}
                            >
                              Read More
                              <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Blog Modal */}
      <AnimatePresence>
        {activeBlog && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveBlog(null)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
            >
              <motion.div
                className="relative bg-[#0f0f0f] border border-white/10 rounded-[28px] w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col pointer-events-auto shadow-2xl"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Modal Header Image */}
                <div className="w-full h-48 md:h-56 flex-shrink-0 overflow-hidden rounded-t-[28px]">
                  <img
                    src={activeBlog.image}
                    alt={activeBlog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setActiveBlog(null)}
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Body */}
                <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
                  <h2 className="text-xl md:text-2xl font-semibold text-white leading-snug mb-6">
                    {activeBlog.title}
                  </h2>

                  <div className="space-y-4">
                    {activeBlog.content?.map((block, i) => (
                      <div key={i}>
                        {block.heading && (
                          <p className="text-white text-sm md:text-base font-semibold mb-2">
                            {block.heading}
                          </p>
                        )}
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed whitespace-pre-line">
                          {block.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
