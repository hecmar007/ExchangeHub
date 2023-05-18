import React, { useState } from 'react';
import { Chip, TextField } from '@mui/material';

function FilterBar() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTag = () => {
    if (inputValue) {
      setTags([...tags, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTag = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  return (
    <div>
      {tags.map((tag) => (
        <Chip
          key={tag}
          label={tag}
          onDelete={() => handleDeleteTag(tag)}
          color="secondary"
          style={{marginRight:"5px"}}
        />
      ))}
      <TextField
        label="Afegir etiquetes"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTag();
          }
        }}
      />
    </div>
  );
}

export default FilterBar;
