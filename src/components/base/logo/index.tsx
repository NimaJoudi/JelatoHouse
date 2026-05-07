import { FC } from "react";


type LogoProps = {
	size?: "small" | "medium" | "large";
}

const sizes = {
	small: { width: 60, height: 60},
	medium: { width: 120, height: 120},
	large: { width: 180, height: 180},

}

const Logo: FC<LogoProps> = (props) => {

	const {size = "medium"} = props;


    return <img src="/assets/images/hero.png" width={sizes[size].width} height={sizes[size].height}  alt="Hero Logo"/>;
};

export default Logo;
