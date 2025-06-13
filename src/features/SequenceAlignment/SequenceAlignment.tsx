import { Paper, Typography } from '@mui/material';
import { useState } from 'react';

import { SequenceFormValues } from './model/types';
import { SequenceForm } from './ui/SequenceForm';
import { SequenceResult } from './ui/SequenceResult';

export const SequenceAlignment = () => {
  const [sequences, setSequences] = useState<SequenceFormValues | null>(null);

  const handleSubmit = (values: SequenceFormValues) => {
    setSequences(values);
  };

  return (
    <Paper
      sx={{
        display: 'grid',
        gridRowGap: '20px',
        padding: '20px',
        margin: 'auto',
        maxWidth: { xs: '90vw', md: '50vw' },
      }}
    >
      <Typography sx={{ textAlign: 'center' }} variant="h4">
        Выравнивание аминокислотных последовательностей
      </Typography>
      <SequenceForm onSubmit={handleSubmit} />
      {sequences && <SequenceResult results={sequences} />}
    </Paper>
  );
};
