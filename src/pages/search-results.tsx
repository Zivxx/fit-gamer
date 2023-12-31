import { useSearchParams } from 'next/navigation';
import PostList from '~/components/post-list/post-list';
import Spinner from '~/components/spinner/spinner';
import { api } from '~/utils/api';

const SearchResults = () => {
  const searchParams = useSearchParams();
  const searchText = searchParams.get('q') ?? '';
  const { data: results, isLoading } = api.blogs.search.useQuery({ searchText: searchText });

  if (isLoading) return <Spinner />;

  return (
    <div>
      <PostList posts={[...(results ?? [])]} /> :
    </div>
  );
};

export default SearchResults;
