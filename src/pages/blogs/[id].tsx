import { usePathname } from 'next/navigation';
import Post from '~/components/post/post';
import { api } from '~/utils/api';

const Blog = () => {
  const urlParts = usePathname()?.split('/') ?? [];
  const blogId = urlParts[urlParts.length - 1]?.split('?')[0];
  const { data: blog } = api.blogs.getById.useQuery({ id: blogId ?? '' });

  return <>{blog ? <Post id={blog.id} title={blog.title} body={blog.body} /> : 'Loading...'}</>;
};
export default Blog;
