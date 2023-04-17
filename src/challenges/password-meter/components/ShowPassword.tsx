import { FC } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface Props {
	isPasswordVisible: boolean;
	togglePassword: () => void;
}

const ShowPassword: FC<Props> = ({ isPasswordVisible, togglePassword }) => (
	<span onClick={togglePassword}>
		{isPasswordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
	</span>
);

export default ShowPassword;
