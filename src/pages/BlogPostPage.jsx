import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import { marked } from 'marked';
import useTitle from '../hooks/useTitle'; // <- Add this!

export default function BlogPostPage() {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === postId);

  // Always call useTitle before any conditional logic
  useTitle(post ? `${post.title} | FreelanceFinance Blog` : 'Blog Post - FreelanceFinance'); // <- Set dynamic title

  if (!post) {
    return <div className="p-8 text-red-700">Post not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-8 text-blue-900">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-4">{new Date(post.date).toLocaleDateString()}</p>
      <div
        className="prose prose-blue max-w-none"
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />
    </div>
  );
}
