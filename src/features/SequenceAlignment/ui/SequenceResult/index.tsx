import { Box, Typography } from '@mui/material';

import { AMINO_ACID_COLORS, AminoAcid } from '../../../../shared/constants/aminoAcids';
import { AminoAcidCharacter } from '../../../../shared/ui';
import { mapSequences } from '../../model/utils';

export const SequenceResult = ({
  sequence1,
  sequence2,
}: {
  sequence1: string;
  sequence2: string;
}) => {
  const sequenceMap = mapSequences(sequence1, sequence2);

  return (
    <div>
      <Typography variant="h6">Визуализация выравнивания</Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: 2,
        }}
      >
        {sequenceMap.map((aminoAcid, i) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0.5,
            }}
            key={i}
          >
            <AminoAcidCharacter
              background={AMINO_ACID_COLORS[aminoAcid.a as AminoAcid]}
              key={i}
              char={aminoAcid.a as AminoAcid}
            />
            <AminoAcidCharacter
              key={i}
              background={
                aminoAcid.b !== aminoAcid.a
                  ? AMINO_ACID_COLORS[aminoAcid.b as AminoAcid]
                  : 'transparent'
              }
              char={aminoAcid.b as AminoAcid}
            />
          </Box>
        ))}
      </Box>
    </div>
  );
};
