import { FC } from "react";
import AcceptanceBanner from "src/components/Base/AcceptanceBanner/AcceptanceBanner";
import Slider from "src/components/Base/Slider/Slider";

const HomaPage: FC = () => {
    return (
        <div className="bg-gray-700">
            <AcceptanceBanner />
            <Slider
                slidesPerView={1}
                slides={[
                    {
                        id: 1,
                        src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/q03asahh.24i.jpg",
                        alt: "gelato",
                    },
                    {
                        id: 2,
                        src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/mrpose5b.zo1.jpg",
                        alt: "gelato",
                    },
                ]}
            />
        </div>
    );
};

export default HomaPage;
