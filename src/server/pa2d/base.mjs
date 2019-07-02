import { PERSO_ARABIC_MAP, DESPHILIC_MAP } from '../../../config/word-maps.confing';

export const PERSO_ARABIC_BASE = `${process.env.DESPHILIC_HOME || process.env.HOME}/${PERSO_ARABIC_MAP}`;

export const DESPHILIC_BASE = `${process.env.DESPHILIC_HOME || process.env.HOME}/${DESPHILIC_MAP}`;

export const PERSO_ARABIC_TODO_WORDS = `${PERSO_ARABIC_BASE}/new-words.json`;

export const DESPHILIC_TODO_WORDS = `${DESPHILIC_BASE}/new-words.json`;