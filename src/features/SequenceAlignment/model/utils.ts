export const mapSequences = (sequence1: string, sequence2: string) => {
  const res = [];

  for (let i = 0; i < sequence1.length; i++) {
    res.push({ a: sequence1[i], b: sequence2[i] });
  }

  return res;
};

export const defaultSequenceFormValues = {
  sequence1: '',
  sequence2: '',
};
