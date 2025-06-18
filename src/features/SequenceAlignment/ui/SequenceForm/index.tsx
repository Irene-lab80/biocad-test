import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

import { FormInputText } from '../../../../shared/ui';
import { SequenceFormSchema } from '../../model/schema';
import { SequenceFormValues } from '../../model/types';
import { defaultSequenceFormValues } from '../../model/utils';

type SequenceFormProps = {
  onSubmit: (values: SequenceFormValues) => void;
  onReset: () => void;
};

export const SequenceForm = ({ onSubmit, onReset }: SequenceFormProps) => {
  const { handleSubmit, reset, control } = useForm<SequenceFormValues>({
    resolver: zodResolver(SequenceFormSchema),
    defaultValues: defaultSequenceFormValues,
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(onSubmit)();
  };

  return (
    <form onSubmit={handleFormSubmit}>
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

        <Button type="submit" variant={'contained'}>
          Сравнить последовательности
        </Button>
        <Button
          type="button"
          onClick={() => {
            reset();
            onReset();
          }}
          variant={'outlined'}
        >
          Сбросить
        </Button>
      </Stack>
    </form>
  );
};
