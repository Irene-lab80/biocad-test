import { Box } from '@mui/material';

import { AminoAcid } from '../../constants/aminoAcids';

export const AminoAcidCharacter = ({
  char,
  background,
}: {
  char: AminoAcid;
  background: string;
}) => (
  <Box
    component={'span'}
    bgcolor={background}
    sx={{
      fontFamily: 'monospace',
      padding: '0 2px',
    }}
  >
    {char}
  </Box>
);
