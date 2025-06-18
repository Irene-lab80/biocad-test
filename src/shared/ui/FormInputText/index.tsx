import TextField from '@mui/material/TextField';
import { Control, Controller } from 'react-hook-form';

import { SequenceFormValues } from '../../../features/SequenceAlignment/model/types';

type FormInputProps = {
  name: keyof SequenceFormValues;
  control: Control<SequenceFormValues>;
  label: string;
};

export const FormInputText = ({ name, control, label }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          slotProps={{
            htmlInput: {
              style: { textTransform: 'uppercase' },
            },
          }}
        />
      )}
    />
  );
};
