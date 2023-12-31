import { Autocomplete, Button, TextField, createFilterOptions } from '@mui/material';
import { useState } from 'react';
import styles from './post-form.module.css';

type PostFormProps = {
  onFormSubmit: (formData: { title: string; body: string; blogTags: string[] }) => void;
  tags: string[];
};

const PostForm = (props: PostFormProps) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [formTags, setFormTags] = useState<string[]>([]);

  const filterOptions = createFilterOptions({ limit: 10 });

  const onCreateButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.onFormSubmit({
      title: title,
      body: body,
      blogTags: formTags,
    });
  };

  return (
    <div className={styles.form__div}>
      <div className={styles.form__input}>
        <TextField label='Title' fullWidth onChange={(event) => setTitle(event.target.value)} />
      </div>
      <div className={styles.form__input}>
        <TextField label='Body' fullWidth multiline minRows={20} onChange={(event) => setBody(event.target.value)} />
      </div>

      <Autocomplete
        filterSelectedOptions={true}
        filterOptions={filterOptions}
        multiple
        id='tags-input'
        options={props.tags ?? []}
        freeSolo
        renderInput={(params) => <TextField {...params} variant='standard' label='Tags' placeholder=' Tags' />}
        value={formTags}
        onChange={(event, newValue: string[]) => setFormTags(newValue)}
      />
      <div className={styles.form__input}>
        <Button onClick={(event) => onCreateButtonClick(event)}>Create</Button>
      </div>
    </div>
  );
};

export default PostForm;
