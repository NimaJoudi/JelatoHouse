import { FC, ReactNode } from "react";


type ButtonProps = {
	variant?: "contained" | "outlined" | "text";
	children: ReactNode;
	color?: "primary" | "secondary";
	size?: "small" | "medium"| "large"
};

const colors = {
	primary: "bg-primary-500",
	secondary: "bg-secondary-500",
}

const sizes = {
	small: "text-sm",
	medium: "text-base",
	large: "text-lg"
}



const Button: FC<ButtonProps> = ({variant = "contained", children, color = "primary", size = "medium", ...rest}) => {

	const clx = (...classes: (string | undefined | false)[]): string => {
	return classes.filter(Boolean).join(" ");
	}

	return (() => {
		switch(variant){

			case "contained":

				return(
					<button className={clx("p-2 rounded-3xl", colors[color], sizes[size])}{...rest}> {children} </button>
				)

			case "outlined":

				return (
					<button className="" {...rest}>
						{children}
					</button>
				)

			case "text":

				return (
					<button className="" {...rest}> {children}</button>
				)

			default:

				return <button className="" {...rest}> {children}</button>

		}




	})();

};

export default Button;