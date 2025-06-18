export const AMINO_ACID_COLORS = {
  // Цистеин
  C: '#FFEA00',

  // Гидрофобные
  A: '#67E4A6',
  I: '#67E4A6',
  L: '#67E4A6',
  M: '#67E4A6',
  F: '#67E4A6',
  W: '#67E4A6',
  Y: '#67E4A6',
  V: '#67E4A6',
  P: '#67E4A6',

  // Глицин
  G: '#CCCCCC',

  // Отрицательно заряженные
  D: '#FF3333',
  E: '#FF3333',

  // Положительно заряженные
  K: '#6600CC',
  R: '#6600CC',
  H: '#6600CC',

  // Полярные
  S: '#3399FF',
  T: '#3399FF',
  N: '#3399FF',
  Q: '#3399FF',

  // Пропуск
  '-': '#FFFFFF',
} as const;

export const AMINO_ACIDS = [
  'A',
  'R',
  'N',
  'D',
  'C',
  'E',
  'Q',
  'G',
  'H',
  'I',
  'L',
  'K',
  'M',
  'F',
  'P',
  'S',
  'T',
  'W',
  'Y',
  'V',
  '-',
] as const;

export type AminoAcid = typeof AMINO_ACIDS[number];
