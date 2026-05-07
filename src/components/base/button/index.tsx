import { FC, ReactNode } from "react";


type ButtonProps = {
	variant?: "contained" | "outlined" | "text";
	children: ReactNode;
	color?: "primary" | "secondary";
	size?: "small" | "medium"| "large"
};

const buttonBaseStyle = "rounded-full outline-none";


const variants = {
	contained: {
		primary: "bg-primary-500 text-white",
		secondary: "bg-secondary-500 text-white",
		sizes: {
			small: "px-5 py-1 text-sm",
			medium: "px-6 py-2 text-base",
			large: "px-7 py-3 text-lg"
		},
	},
	outlined: {
		primary: "text-primary-500 border border-primary-500",
		secondary: "text-secondary-500 border border-secondary-500",
		sizes: {
			small: "px-2 py-1 text-sm",
			medium: "px-4 py-2 text-base",
			large: "px-6 py-3 text-lg"
		},
	},
	text: {
		primary: "text-gray-900",
		secondary: "text-gray-900",
		sizes: {
			small: "p-1 text-sm",
			medium: "p-2 text-base",
			large: "p-3 text-lg"
		},
	},
}


const Button: FC<ButtonProps> = ({variant = "contained", children, color = "primary", size = "medium", ...rest}) => {

	const clx = (...classes: (string | undefined | false)[]): string => {

		return classes.filter(Boolean).join(" ");
	
	}

	return (
		<button className={clx(buttonBaseStyle, variants[variant][color], variants[variant]["sizes"][size])}{...rest}> {children} </button>
	);

};

export default Button;

/*
component composition: 
write a component that it is : 
reusable,
configurable,
accessible,
themable,
responsive,
maintainable,
scalable

*/