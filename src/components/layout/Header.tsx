import { FC } from "react";
import Button from "src/components/Base/Button/Button";
import Logo from "src/components/Base/Logo/Logo";
import Container from "src/components/Base/Container/Container";

const Header: FC = () => {
    return (
        <header>
            <Container>
                <div className="flex justify-between items-center py-2.5">
                    <Logo />

                    <div className="[@>button]: mr-2 flex items-center">
                        <div className="hidden md:flex">
                            <Button variant="text" color="primary">
                                سفارش اینترنتی
                            </Button>

                            <Button variant="text" color="secondary">
                                قوانین سایت
                            </Button>
                        </div>

                        <Button variant="contained" color="primary">
                            ورود
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
