import { z } from 'zod';

import { SequenceFormSchema } from './schema';

export type SequenceFormValues = z.infer<typeof SequenceFormSchema>;
