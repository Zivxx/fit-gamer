import { useState } from 'react';
import { Avatar, Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';

import { api } from '~/utils/api';

type CommentProps = {
  id: string;
  relationId: string;
  body: string;
};

const Comment = (props: CommentProps) => {
  const [newCommentBody, setNewCommentBody] = useState('');

  const { mutate: createComment } = api.blogComments.createForPost.useMutation({
    onSuccess: (result) => {
      console.log(result);
    },
    onError: (e) => {
      console.error(e);
    },
  });

  const postReply = () => {
    createComment({
      postId: props.relationId,
      body: newCommentBody,
      replyToId: props.id,
      userId: 'cln7lollr0000uvy88mhkhqq3',
    });
  };
  return (
    <>
      <Card style={{ marginTop: '20px', padding: '20px' }}>
        <CardHeader avatar={<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />} />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {props.body}
          </Typography>
        </CardContent>
        <TextField
          label='New Comment'
          fullWidth
          onChange={(event) => setNewCommentBody(event.target.value)}
        ></TextField>
        <Button onClick={() => postReply()}>Post Comment</Button>
      </Card>
    </>
  );
};

export default Comment;
