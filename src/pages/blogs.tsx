import { useState, useCallback } from 'react';
import { Grid } from '@mui/material';
import PostList from '~/components/post-list/post-list';
import TagSelector from '~/components/tag-selector/tag-selector';
import Spinner from '~/components/spinner/spinner';
import { api } from '~/utils/api';

const Blogs = () => {
  const [selectedTags, setSelectedTags] = useState([] as string[]);

  const { data: blogs, isLoading } = api.blogs.getByTags.useQuery({ tagIds: selectedTags });

  const handleTagSelect = useCallback((tagIds: string[]) => {
    setSelectedTags(tagIds);
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <TagSelector onTagSelect={handleTagSelect} />
      </Grid>
      <Grid item xs={9}>
        {<PostList posts={[...(blogs ?? [])]} />}
      </Grid>
    </Grid>
  );
};

export default Blogs;
