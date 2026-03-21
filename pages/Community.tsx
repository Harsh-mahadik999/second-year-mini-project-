import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share, Plus, Search, Filter, TrendingUp } from 'lucide-react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import GlassCard from '../src/components/GlassCard';
import PageIntroOverlay from '../src/components/PageIntroOverlay';

export default function Community() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Sarah Chen',
      time: '2 hours ago',
      content: 'Just completed my first React project! 🎉 Built a todo app with hooks and context API. The learning curve was steep but totally worth it. Any tips for optimizing performance?',
      likes: 24,
      comments: 8,
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      id: 2,
      author: 'Mike Rodriguez',
      time: '5 hours ago',
      content: 'Looking for study buddies for the upcoming AWS certification exam. Anyone interested in forming a study group? We could meet virtually twice a week.',
      likes: 18,
      comments: 12,
      tags: ['AWS', 'Cloud', 'Certification']
    },
    {
      id: 3,
      author: 'Emily Johnson',
      time: '1 day ago',
      content: 'Sharing my Python data analysis project on customer behavior patterns. Used pandas, matplotlib, and scikit-learn. Open to feedback and collaboration!',
      likes: 42,
      comments: 15,
      tags: ['Python', 'Data Science', 'Machine Learning']
    }
  ]);

  const [newPost, setNewPost] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const handleNewPost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: 'You',
        time: 'Just now',
        content: newPost,
        likes: 0,
        comments: 0,
        tags: ['Discussion']
      };
      setPosts([post, ...posts]);
      setNewPost('');
      setShowNewPost(false);
    }
  };

  const trendingTopics = [
    { name: 'React Hooks', posts: 156 },
    { name: 'Machine Learning', posts: 89 },
    { name: 'AWS Certification', posts: 67 },
    { name: 'JavaScript ES6', posts: 45 },
    { name: 'Python Django', posts: 34 }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <PageIntroOverlay title="Community" subtitle="Connect With Peers" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-amber-700">Community</span> Hub
            </h1>
            <p className="text-lg text-slate-700 max-w-2xl mb-6">
              Connect, collaborate, and learn with real developers. Share project ideas, ask questions, 
              receive feedback, and build meaningful relationships within a genuine community of learners and professionals.
            </p>
            <div className="h-px bg-amber-200 w-32 mb-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <GlassCard className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center">
                    <span className="text-amber-900 font-semibold">Y</span>
                  </div>
                  <button
                    onClick={() => setShowNewPost(!showNewPost)}
                    className="flex-1 px-4 py-2 bg-amber-100 rounded-lg text-left text-slate-600 hover:bg-amber-200 transition-colors"
                  >
                    What's on your mind?
                  </button>
                  <button
                    onClick={() => setShowNewPost(!showNewPost)}
                    className="p-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-all duration-200"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                {showNewPost && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-border pt-4"
                  >
                    <textarea
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      placeholder="Share your thoughts, ask questions, or showcase your projects..."
                      className="w-full p-3 bg-white border border-amber-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none text-slate-900"
                      rows={4}
                    />
                    <div className="flex justify-end space-x-2 mt-3">
                      <button
                        onClick={() => setShowNewPost(false)}
                        className="px-4 py-2 text-amber-700 hover:text-amber-900 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleNewPost}
                        className="px-6 py-2 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-all duration-200"
                      >
                        Post
                      </button>
                    </div>
                  </motion.div>
                )}
              </GlassCard>

              <div className="space-y-6">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassCard>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-amber-900">{post.author}</h3>
                          <span className="text-sm text-slate-500">{post.time}</span>
                        </div>
                        <p className="text-slate-700 mb-4">{post.content}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center space-x-6 text-slate-600">
                          <button
                            onClick={() => handleLike(post.id)}
                            className="flex items-center space-x-2 hover:text-amber-700 transition-colors"
                          >
                            <Heart className="w-5 h-5" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 hover:text-amber-700 transition-colors">
                            <MessageCircle className="w-5 h-5" />
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-2 hover:text-amber-700 transition-colors">
                            <Share className="w-5 h-5" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <GlassCard>
                <div className="flex items-center space-x-2 mb-4">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    className="flex-1 bg-transparent border-none outline-none"
                  />
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200">
                  Search
                </button>
              </GlassCard>

              <GlassCard>
                <h3 className="font-semibold mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                  Trending Topics
                </h3>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                      <span className="font-medium">#{topic.name}</span>
                      <span className="text-sm text-muted-foreground">{topic.posts} posts</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="font-semibold mb-4">Community Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Members</span>
                    <span className="font-semibold">12,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Today</span>
                    <span className="font-semibold">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Posts This Week</span>
                    <span className="font-semibold">456</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}