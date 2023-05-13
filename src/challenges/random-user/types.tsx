type Title = 'Mr' | 'Mrs' | 'Miss';
type Gender = 'male' | 'female';

export interface User {
	index: number;
	username: string;
	email: string;
	name: Name
	gender: Gender;
	age: number;
	dob: string;
	picture: string;
	phone: string;
	location: Location,
}

export interface Location {
	country: string;
	state: string;
	city: string;
}

export interface Name {
	title: Title;
	firstName: string;
	lastName: string;
}
