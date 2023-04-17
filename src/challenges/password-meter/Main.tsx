import React, {
	useState,
	ChangeEvent,
	useRef,
	useEffect,
	useMemo,
} from 'react';
import {
	PasswordStrengthMeter,
	PasswordCheckDisplay,
	PasswordField,
} from './components';
import './Main.css';
import { defaultPasswordProperties } from './defaults';
import Button from '../common/Button';

const App: React.FC = () => {
	const [password, setPassword] = useState('');
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	const [passwordProperties, setPasswordProperties] = useState(
		defaultPasswordProperties
	);
	const passwordRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (passwordRef.current) {
			passwordRef.current.focus();
		}
	}, []);

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const togglePassword = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	const handleSubmit = () => {
		setPasswordProperties(defaultPasswordProperties);
		alert('Submitted');
	};

	const isAcceptedPassword = useMemo(() => {
		return Object.values(passwordProperties).every((item) => item);
	}, [passwordProperties]);

	return (
		<div className="password-container">
			<div className="password-header">Password Strength Checker</div>
			<div className="password-content">
				<label htmlFor="password-input">Enter your password</label>
				<PasswordField
					ref={passwordRef}
					password={password}
					isPasswordVisible={isPasswordVisible}
					handlePasswordChange={handlePasswordChange}
					togglePassword={togglePassword}
				/>

				{password && (
					<>
						<PasswordStrengthMeter
							password={password}
							passwordProperties={passwordProperties}
							setPasswordProperties={setPasswordProperties}
						/>

						<PasswordCheckDisplay
							passwordProperties={passwordProperties}
						/>
					</>
				)}

				<Button
					text="Submit"
					onClick={handleSubmit}
					disabled={!isAcceptedPassword}
				/>
			</div>
		</div>
	);
};

export default App;
