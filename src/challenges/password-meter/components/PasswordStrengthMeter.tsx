import React, {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useMemo,
} from 'react';
import { getStregthLevel } from '../utils/password-strength';
import { PasswordProperties, strengthMappingClass } from '../types';
import { passwordRules } from '../utils/constants';

interface Props {
	password: string;
	passwordProperties: PasswordProperties;
	setPasswordProperties: Dispatch<SetStateAction<PasswordProperties>>;
}

const PasswordStrengthMeter: React.FC<Props> = (props) => {
	const { password, passwordProperties, setPasswordProperties } = props;

	const updatePasswordProperties = useCallback(
		(rule: string, value: boolean) => {
			setPasswordProperties((prev) => ({
				...prev,
				[rule]: value,
			}));
		},
		[setPasswordProperties]
	);

	const getPasswordStrengthLevel = useCallback(() => {
		passwordRules.forEach((rule) => {
			const isMatch = rule.pattern.test(password);
			const isAlreadyTrue = passwordProperties[rule.name];

			if (isMatch && !isAlreadyTrue) {
				updatePasswordProperties(rule.name, true);
			} else if (!isMatch && isAlreadyTrue) {
				updatePasswordProperties(rule.name, false);
			}
		});
	}, [password, passwordProperties, updatePasswordProperties]);

	useEffect(() => {
		getPasswordStrengthLevel();
	}, [password, getPasswordStrengthLevel]);

	const strengthLevel = useMemo(() => {
		const score = Object.values(passwordProperties).filter(Boolean).length;
		return getStregthLevel(score);
	}, [passwordProperties]);

	const strengthClass = useMemo(() => {
		return strengthMappingClass[strengthLevel];
	}, [strengthLevel]);

	return (
		<div className="password-strength-meter">
			<span className={password && strengthClass}>
				{password && strengthLevel}
			</span>
		</div>
	);
};

export default PasswordStrengthMeter;
