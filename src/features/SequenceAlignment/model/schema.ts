import { z } from 'zod';

const AMINO_ACID_REGEX = /^[ARNDCEQGHILKMFPSTWYV-]+$/i;

export const SequenceFormSchema = z
  .object({
    sequence1: z
      .string()
      .min(1, 'Введите последовательность')
      .regex(AMINO_ACID_REGEX, {
        message:
          'Допустимы только латинские буквы аминокислот (A, R, N, ..., V) и дефис (-)',
      })
      .transform((val) => val.toUpperCase()),
    sequence2: z
      .string()
      .min(1, 'Введите последовательность')
      .regex(AMINO_ACID_REGEX, {
        message:
          'Допустимы только латинские буквы аминокислот (A, R, N, ..., V) и дефис (-)',
      })
      .transform((val) => val.toUpperCase()),
  })
  .refine((data) => data.sequence1.length === data.sequence2.length, {
    message: 'Длина введенных последовательностей должна быть одинаковая',
    path: ['sequence2'],
  });
