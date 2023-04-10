type ITitles = 'Mr' | 'Mrs' | 'Miss';
type IGender = 'male' | 'female';

export interface IUser {
	index: number;
	email: string;
	title: ITitles;
	firstName: string;
	lastName: string;
	gender: IGender;
	thumbnail: string;
}
