import classNames from 'classnames';
import { ButtonProps, typeClassMap, variantClassMap } from './types';
import './Button.scss';

const Button: React.FC<ButtonProps> = ({
	text,
	children,
	type = 'rounded',
	variant = 'primary',
	disabled = false,
	...rest
}) => {
	const variantClass = variantClassMap[variant] || '';
	const typeClass = typeClassMap[type] || '';

	const btnClass = classNames('btn', variantClass, typeClass);

	return (
		<button className={btnClass} disabled={disabled} {...rest}>
			{text ?? children}
		</button>
	);
};

export default Button;
