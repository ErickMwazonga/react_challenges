import React from 'react';
import { format } from 'date-fns'
import { User } from './types';
import { CiLocationOn } from 'react-icons/ci'
import './Main.scss'
import { Controls } from './components';


interface Props {
    loading: boolean;
	currentUser: User;
	next: () => void;
	previous: () => void;
}

const ProfileCard: React.FC<Props> = ({ loading, next, previous, currentUser }) => { 
    const { picture, name, location, age, dob, phone, email } = currentUser
    const fullName = `${name?.firstName} ${name?.firstName}`;
    const coverImageUrl = 'https://frontend-mentor-profile-card-component-murerkinn.vercel.app/images/bg-pattern-card.svg'

	return (
		<div className="profile-card">
            <div className='card-header'>
                <div className='cover-image'>
                    <img src={coverImageUrl} alt="" />
                </div>

                <div className='card-header-details'>
                    <div className='avatar'>
                        <img src={picture} alt="User" />
                    </div>

                    <div className='details'>
                        <p className='name-title'>{name?.title}</p>
                        <p className='name'>{fullName}</p>

                        <div className='location'>
                            <CiLocationOn className='icon' />
                            <div className='city-state'>
                                <span>{location?.city}, {location?.state}</span>
                                <span className='country'>
                                    {location?.country}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-content'>
                <div className='contact-details'>
                    <span>{phone}</span>
                    <span>{email}</span>
                </div>

                <div className='age-details'>
                    <span>{age}</span>
                    <span>{dob && format(new Date(dob), 'dd/MM/yyyy')}</span>
                </div>
            </div>

            <Controls
                previous={previous}
                next={next}
                currentUser={currentUser}
                loading={loading}
            />
		</div>
	);
};
export default ProfileCard;
