import { useState } from 'react';
import { api } from '~/utils/api';
import Comment from '../comment/comment';
import { Button, Card, TextField } from '@mui/material';

type CommentListProps = {
  relationId: string;
  relationType: 'user' | 'post';
};

const CommentList = (props: CommentListProps) => {
  const [newCommentBody, setNewCommentBody] = useState('');

  const { data: comments } = api.blogComments.getForPost.useQuery({ postId: props.relationId });
  const { mutate: createComment } = api.blogComments.createForPost.useMutation({
    onSuccess: (result) => {
      console.log(result);
    },
    onError: (e) => {
      console.error(e);
    },
  });

  const postComment = () => {
    createComment({ postId: props.relationId, body: newCommentBody, userId: 'cln7lollr0000uvy88mhkhqq3' });
  };

  return (
    <div style={{ marginTop: '20px', padding: '20px' }}>
      <Card style={{ marginTop: '20px', padding: '20px' }}>
        <TextField
          label='New Comment'
          fullWidth
          onChange={(event) => setNewCommentBody(event.target.value)}
        ></TextField>
        <Button onClick={() => postComment()}>Post Comment</Button>
      </Card>
      {comments?.map((comment) => (
        <Comment key={comment.id} id={comment.id} relationId={props.relationId} body={comment.body} />
      ))}
    </div>
  );
};

export default CommentList;
