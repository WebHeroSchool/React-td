import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItems = () => (<div>
  <TextField
          id="standard-full-width"
          label=""
          style={{ margin: 8 }}
          placeholder="Добавить задание"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
</div>);

export default InputItems;
