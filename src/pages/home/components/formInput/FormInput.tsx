import * as React from 'react';
import FormControl, { FormControlState } from '@mui/material/FormControl';
import Input from '@mui/material/Input';

export default function BasicFormControl() {
    return (
        <FormControl defaultValue="" required>
            <Input></Input>
      </FormControl>
    );
  }