import { PasswordStrengthLevel } from '../types';
import { passwordRules } from './constants';

const getPasswordStrengthLevel = (password: string): PasswordStrengthLevel => {
	const score: number = getPasswordScore(password);
	return getStregthLevel(score);
};

export const getStregthLevel = (score: number): PasswordStrengthLevel => {
	switch (score) {
		case 0:
			return PasswordStrengthLevel.VeryWeak;
		case 1:
			return PasswordStrengthLevel.Weak;
		case 2:
			return PasswordStrengthLevel.Fair;
		case 3:
			return PasswordStrengthLevel.Strong;
		case 4:
			return PasswordStrengthLevel.VeryStrong;
		default:
			return PasswordStrengthLevel.VeryWeak;
	}
};

const getPasswordScore = (password: string): number => {
	let score = 0;

	passwordRules.forEach((rule) => {
		if (rule.pattern.test(password)) {
			score += 1;
		}
	});

	return score;
};

export { getPasswordStrengthLevel };
