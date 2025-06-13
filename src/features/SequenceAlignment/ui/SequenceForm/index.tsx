import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

import { FormInputText } from '../../../../shared/ui';
import { SequenceFormSchema } from '../../model/schema';
import { SequenceFormValues } from '../../model/types';

type SequenceFormProps = {
  onSubmit: (values: SequenceFormValues) => void;
};

export const SequenceForm = ({ onSubmit }: SequenceFormProps) => {
  const { handleSubmit, reset, control } = useForm<SequenceFormValues>({
    resolver: zodResolver(SequenceFormSchema),
    defaultValues: {
      sequence1: '',
      sequence2: '',
    },
  });

  return (
    <form>
      <Stack gap={1}>
        <FormInputText
          name={'sequence1'}
          control={control}
          label={'Последовательность 1'}
        />
        <FormInputText
          name={'sequence2'}
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
  );
};
