import PostListItem from '../post-list-item/post-list-item';

type PostListProps = {
  posts: Post[];
};

type Post = {
  id: string;
  title: string;
  body: string;
};

const PostList = (props: PostListProps) => {
  return (
    <>
      {props.posts.map((post) => {
        return <PostListItem key={post.id} id={post.id} title={post.title} body={post.body} />;
      })}
    </>
  );
};

export default PostList;
