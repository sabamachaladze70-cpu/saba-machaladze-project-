import React, { useState, useEffect } from 'react';
import Section from './Section';

interface Post {
  id: number;
  title: string;
  body: string;
}

const TravelStories: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch top 3 posts to simulate travel stories
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('მონაცემები ვერ ჩაიტვირთა');
        setLoading(false);
      });
  }, []);

  return (
    <Section title="მოგზაურების ისტორიები" description="წაიკითხეთ ჩვენი მომხმარებლების შთაბეჭდილებები." bgColor="bg-white">
      {loading && <p className="text-primary font-medium">იტვირთება მონაცემები...</p>}
      
      {error && <p className="text-red-500 font-medium">{error}</p>}
      
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post.id} className="p-5 border border-gray-100 shadow-sm rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-800 text-lg mb-2 capitalize line-clamp-1">{post.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3">{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export default TravelStories;
