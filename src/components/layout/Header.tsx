import { FC } from "react";
import Button from "../base/button";
import Logo from "../base/logo";
import Container from "../base/container";

const Header: FC = () => {

	return (
		<header>

			<Container>

				<div className="flex justify-between items-center py-2.5">

					<Logo/>
					
					<div className="[@>button]: mr-2 flex items-center">
						<div className="hidden md:flex">
							<Button
								variant="text"
								color="primary"
							>
								سفارش اینترنتی 
							
							</Button>

							<Button
								variant="text"
								color="secondary"
							>
								قوانین سایت 
							
							</Button>

						</div>

						<Button
							variant="contained"
							color="primary"
							
						>
							 ورود
						
						</Button>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
