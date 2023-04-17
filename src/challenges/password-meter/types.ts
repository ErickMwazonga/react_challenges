export enum PasswordStrengthLevel {
	VeryWeak = 'Very Weak',
	Weak = 'Weak',
	Fair = 'Fair',
	Strong = 'Strong',
	VeryStrong = 'Very Strong',
}

export enum PASSWORD_PROPERTIES_TYPES {
	HAS_NUMBER = 'hasNumber',
	HAS_UPPERCASE_LETTER = 'HasUppercaseLetter',
	HAS_SPECIAL_CHARACTER = 'hasSpecialCharacter',
	HAS_MORE_THAN_EIGHT_CHARS = 'hasMoreThanEightChars',
}

export const strengthMappingClass = {
	[PasswordStrengthLevel.VeryWeak]: 'very-weak',
	[PasswordStrengthLevel.Weak]: 'weak',
	[PasswordStrengthLevel.Fair]: 'fair',
	[PasswordStrengthLevel.Strong]: 'strong',
	[PasswordStrengthLevel.VeryStrong]: 'very-strong',
};

export type Rule = {
	name: string;
	pattern: RegExp;
};

export type PasswordCheckDisplay = {
	[key: string]: string;
	[PASSWORD_PROPERTIES_TYPES.HAS_NUMBER]: string;
	[PASSWORD_PROPERTIES_TYPES.HAS_UPPERCASE_LETTER]: string;
	[PASSWORD_PROPERTIES_TYPES.HAS_SPECIAL_CHARACTER]: string;
	[PASSWORD_PROPERTIES_TYPES.HAS_MORE_THAN_EIGHT_CHARS]: string;
};

export type PasswordProperties = {
	[key: string]: boolean;
	[PASSWORD_PROPERTIES_TYPES.HAS_NUMBER]: boolean;
	[PASSWORD_PROPERTIES_TYPES.HAS_UPPERCASE_LETTER]: boolean;
	[PASSWORD_PROPERTIES_TYPES.HAS_SPECIAL_CHARACTER]: boolean;
	[PASSWORD_PROPERTIES_TYPES.HAS_MORE_THAN_EIGHT_CHARS]: boolean;
};
