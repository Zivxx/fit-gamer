import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { api } from '~/utils/api';

type TagSelectorProps = {
  onTagSelect: (tagIds: string[]) => void;
};

const TagSelector = (props: TagSelectorProps) => {
  const [selectedTags, setSelectedTags] = useState([] as string[]);

  const { onTagSelect } = props;
  const { data: tags } = api.tags.getAll.useQuery();

  useEffect(() => onTagSelect(selectedTags), [onTagSelect, selectedTags]);

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedTags((previousState) => [...previousState, event.target.dataset.id!]);
    } else {
      setSelectedTags((previousState) =>
        previousState.filter((existingTagId) => existingTagId !== event.target.dataset.id)
      );
    }
  };

  return (
    <Card style={{ marginTop: '20px', padding: '20px' }}>
      <CardHeader title='Browse by Tag' />
      <CardContent>
        <FormGroup>
          {tags?.map((tag) => (
            <FormControlLabel
              key={tag.id}
              control={
                <Checkbox
                  inputProps={{ 'data-id': tag.id } as React.InputHTMLAttributes<HTMLInputElement>}
                  onChange={(event) => handleTagChange(event)}
                  checked={selectedTags.includes(tag.id)}
                />
              }
              label={tag.name}
            />
          ))}
        </FormGroup>
      </CardContent>
    </Card>
  );
};

export default TagSelector;
