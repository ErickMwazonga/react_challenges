import { ChangeEvent, forwardRef } from 'react';
import ShowPassword from './ShowPassword';

interface Props {
	isPasswordVisible: boolean;
	password: string;
	handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
	togglePassword: () => void;
}

const PasswordField = forwardRef<HTMLInputElement, Props>((props, ref) => {
	const {
		password,
		isPasswordVisible,
		handlePasswordChange,
		togglePassword,
	} = props;

	return (
		<div className="password-with-show">
			<input
				ref={ref}
				type={isPasswordVisible ? 'text' : 'password'}
				id="password-input"
				value={password}
				onChange={handlePasswordChange}
			/>

			<ShowPassword
				isPasswordVisible={isPasswordVisible}
				togglePassword={togglePassword}
			/>
		</div>
	);
});

export default PasswordField;
