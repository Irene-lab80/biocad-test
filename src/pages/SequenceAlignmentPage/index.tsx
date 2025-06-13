import { Button, Paper, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { FormInputText } from '../../components';

const amono_acid =
  'VLSPADKTNIKASWEKIGSHGGEYGAEALERTFLCFPTTKTYFPHFDLSHGSAQVKAHGKKVADALTNAVGHLDDLPGALSALSDLHAYKLRVDPVNFKLLSHCLLVTLASHHPAEFT';

enum FieldNames {
  Sequence1 = 'Sequence1',
  Sequence2 = 'Sequence2',
}

const defaultValues = {
  [FieldNames.Sequence1]: '',
  [FieldNames.Sequence2]: '',
};

type SequenceAlignmentForm = {
  [FieldNames.Sequence1]: string;
  [FieldNames.Sequence2]: string;
};

export const SequenceAlignmentPage = () => {
  const { register, handleSubmit, reset, control, setValue } =
    useForm<SequenceAlignmentForm>({ defaultValues });

  const onSubmit = (data: SequenceAlignmentForm) => console.log('data', data);

  return (
    <>
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

        <form>
          <Stack gap={1}>
            <FormInputText
              name={FieldNames.Sequence1}
              control={control}
              label={'Последовательность 1'}
            />
            <FormInputText
              name={FieldNames.Sequence2}
              control={control}
              label={'Последовательность 2'}
            />

            <Button onClick={handleSubmit(onSubmit)} variant={'contained'}>
              Сравнить последовательности
            </Button>
            <Button onClick={() => reset()} variant={'outlined'}>
              Сбросить
            </Button>
          </Stack>
        </form>
      </Paper>
    </>
  );
};
