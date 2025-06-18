import { Container, Paper, Typography } from '@mui/material';
import { useState } from 'react';

import { SequenceFormValues } from './model/types';
import { defaultSequenceFormValues } from './model/utils';
import { SequenceForm } from './ui/SequenceForm';
import { SequenceResult } from './ui/SequenceResult';

export const SequenceAlignment = () => {
  const [sequences, setSequences] = useState<SequenceFormValues | null>(null);

  const handleSubmit = (values: SequenceFormValues) => {
    setSequences(values);
  };

  const handleReset = () => {
    setSequences(defaultSequenceFormValues);
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography sx={{ textAlign: 'center' }} variant="h5" component="h1" gutterBottom>
          Выравнивание аминокислотных последовательностей
        </Typography>
        <Typography variant="body1" gutterBottom>
          Для визуализация выравнивания введите две аминокислотных последовательности.
          Последовательности могут содержать только латинские буквы аминокислот (A, R, N,
          D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V) и символ -.
        </Typography>
        <SequenceForm onSubmit={handleSubmit} onReset={handleReset} />
        {sequences && (
          <SequenceResult
            sequence1={sequences.sequence1}
            sequence2={sequences.sequence2}
          />
        )}
      </Paper>
    </Container>
  );
};
