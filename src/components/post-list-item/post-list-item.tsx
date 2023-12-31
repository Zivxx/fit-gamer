import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

type PostListItemProps = {
  id: string;
  title: string;
  body: string;
};

const PostListItem = (props: PostListItemProps) => {
  const router = useRouter();

  return (
    <>
      <Card style={{ marginTop: '20px', padding: '20px' }} onClick={() => router.push(`/blogs/${props.id}`)}>
        <CardHeader avatar={<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />} title={props.title} />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {props.body}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
export default PostListItem;
