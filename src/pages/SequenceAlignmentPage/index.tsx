import { SequenceAlignment } from '../../features/SequenceAlignment/SequenceAlignment';

// .refine((data) => data.password === data.confirmPassword, {
//   message: 'Passwords do not match',
//   path: ['confirmPassword'], // path of error
// });

export const SequenceAlignmentPage = () => {
  return <SequenceAlignment />;
};
