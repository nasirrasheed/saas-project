import { Link } from 'react-router-dom';
import './css/Blogpage.css';
import blogPosts from '../data/blogPosts';
import useTitle from '../hooks/useTitle'; // <- Add this line

export default function BlogPage() {
  useTitle("Blog - FreelanceFinance"); // <- Set dynamic page title

  return (
    <div className="max-w-4xl mx-auto p-8 text-blue-900">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg shadow-sm">
            <Link to={`/blog/${post.id}`}>
              <h2 className="text-xl font-semibold text-blue-800 hover:underline">{post.title}</h2>
            </Link>
            <p className="text-gray-600 text-sm mt-1">{new Date(post.date).toLocaleDateString()}</p>
            <p className="text-gray-700 mt-2">{post.summary}</p>
            <Link to={`/blog/${post.id}`} className="text-blue-700 text-sm mt-2 inline-block hover:underline">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
