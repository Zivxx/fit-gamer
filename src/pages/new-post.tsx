import { Card } from '@mui/material';
import { useRouter } from 'next/navigation';
import PostForm from '~/components/post-form/post-form';
import Spinner from '~/components/spinner/spinner';
import { api } from '~/utils/api';

const NewPost = () => {
  const router = useRouter();
  const { data: tags } = api.tags.getAll.useQuery();

  const { mutate: createPost, isLoading } = api.blogs.create.useMutation({
    onSuccess: (result) => {
      console.log(result);
      router.push(`/blogs/${result.id}`);
    },
    onError: (e) => {
      console.error(e);
    },
  });

  const submitPostWithTags = (formContents: { title: string; body: string; blogTags: string[] }) => {
    createPost(formContents);
  };

  if (isLoading) return <Spinner />;

  return (
    <Card>
      <div className='padding__20'>
        <PostForm tags={tags?.map((tag) => tag.name) ?? []} onFormSubmit={submitPostWithTags} />
      </div>
    </Card>
  );
};

export default NewPost;
