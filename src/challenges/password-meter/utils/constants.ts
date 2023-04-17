import {
	PASSWORD_PROPERTIES_TYPES,
	PasswordCheckDisplay,
	Rule,
} from '../types';

const {
	HAS_NUMBER,
	HAS_UPPERCASE_LETTER,
	HAS_SPECIAL_CHARACTER,
	HAS_MORE_THAN_EIGHT_CHARS,
} = PASSWORD_PROPERTIES_TYPES;

export const passwordRules: Rule[] = [
	{ name: HAS_UPPERCASE_LETTER, pattern: /[A-Z]/ },
	{ name: HAS_NUMBER, pattern: /\d/ },
	{ name: HAS_SPECIAL_CHARACTER, pattern: /\W/ },
	{ name: HAS_MORE_THAN_EIGHT_CHARS, pattern: /.{8,}/ },
];

export const passwordCheckDisplay: PasswordCheckDisplay = {
	[HAS_NUMBER]: 'Password has at least one number',
	[HAS_MORE_THAN_EIGHT_CHARS]: 'Password has at least 8 characters',
	[HAS_UPPERCASE_LETTER]: 'Password has at least one uppercase letter',
	[HAS_SPECIAL_CHARACTER]: 'Password has at least one special character',
};
