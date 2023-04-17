import { CSSProperties } from 'react';

export type Variant = 'primary' | 'secondary' | 'outline';
export type Type = 'sharp' | 'rounded' | 'icon';

export interface ButtonProps {
	text: string | number;
	variant?: Variant;
	type?: Type;
	disabled?: boolean;
	style?: CSSProperties;
	children?: React.ReactNode;
	onClick: () => void;
}

export const variantClassMap = {
	primary: 'primary',
	secondary: 'secondary',
	outline: 'outline',
};

export const typeClassMap = {
	sharp: 'sharp',
	rounded: 'rounded',
	icon: 'icon',
};
