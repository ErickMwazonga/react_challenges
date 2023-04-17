import { PASSWORD_PROPERTIES_TYPES, PasswordProperties } from './types';

const defaultPasswordProperties: PasswordProperties = {
	[PASSWORD_PROPERTIES_TYPES.HAS_NUMBER]: false,
	[PASSWORD_PROPERTIES_TYPES.HAS_UPPERCASE_LETTER]: false,
	[PASSWORD_PROPERTIES_TYPES.HAS_MORE_THAN_EIGHT_CHARS]: false,
	[PASSWORD_PROPERTIES_TYPES.HAS_SPECIAL_CHARACTER]: false,
};

export { defaultPasswordProperties };
