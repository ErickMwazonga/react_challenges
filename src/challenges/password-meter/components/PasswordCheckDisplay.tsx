import { FC } from 'react';
import { CgCheckO, CgDanger } from 'react-icons/cg';
import { PasswordProperties } from '../types';
import { passwordCheckDisplay } from '../utils/constants';

type Props = {
	passwordProperties: PasswordProperties;
};

const PasswordCheckDisplay: FC<Props> = ({ passwordProperties }) => (
	<div className="checks-display">
		{Object.keys(passwordCheckDisplay).map((key) => {
			const statuscls = passwordProperties[key] ? 'met' : 'unmet';

			return (
				<div key={key} className={`checks-item ${statuscls}`}>
					<span className="icon">
						{passwordProperties[key] ? <CgCheckO /> : <CgDanger />}
					</span>
					<span className="text">{passwordCheckDisplay[key]}</span>
				</div>
			);
		})}
	</div>
);

export default PasswordCheckDisplay;
