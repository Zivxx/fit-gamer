import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import CommentList from '../comment-list/comment-list';

type PostProps = {
  id: string;
  title: string;
  body: string;
};

const Post = (props: PostProps) => {
  return (
    <>
      <Card style={{ marginTop: '20px', padding: '20px' }}>
        <CardHeader avatar={<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />} title={props.title} />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {props.body}
          </Typography>
        </CardContent>
      </Card>
      <CommentList relationId={props.id} relationType='post' />
    </>
  );
};

export default Post;
