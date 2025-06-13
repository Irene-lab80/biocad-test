import { z } from 'zod';

export const SequenceFormSchema = z.object({
  sequence1: z.string().min(1, 'Введите последовательность'),
  sequence2: z.string().min(1, 'Введите последовательность'),
});
