import "swiper/swiper.css";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css/effect-fade"
import { FC, useState } from "react";

type Slides = {
	id: number,
	src: string,
	alt: string,
}


type SlideProps = SwiperProps & {
	slides: Slides[];
}

const Slider: FC<SlideProps> = ({slides, ...rest}) => {

	const [ThumbsSwiper, setThumbsSwiper] = useState(null);

    return (

		<div className="relative">
			<button className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black px-3 py-2 text-white">Prev</button>
			<button className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black px-3 py-2 text-white">Next</button>

			<Swiper {...rest} modules={[EffectFade]} effect="fade" thumbs={{swiper: ThumbsSwiper}} navigation= {{
				prevEl: ".swiper-button-prev-custom",
				nextEl: ".swiper-button-next-custom",
			}}
			>

				{slides.map((slide) => (
					<SwiperSlide key={slide.id}>

						<div className="flex justify-center items-center">
							<img src={slide.src} alt={slide.alt} width="80%" height={300} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;
