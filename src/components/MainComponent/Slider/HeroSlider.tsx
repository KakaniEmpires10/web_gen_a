'use client'
import Carousel from "nuka-carousel"
import { useState } from "react";

const HeroSlider = () => {
    const [slideIndex, setSlideIndex] = useState<number>(0);

    const settingCarousel = {
        wrapAround: true,
        autoplay: true,
        autoplayInterval: 3000,
        renderCenterLeftControls: null,
        renderCenterRightControls: null
    }

    return (
        <Carousel renderBottomCenterControls={({ currentSlide, slideCount }) => (
            <div className="flex items-center justify-center space-x-2">
                {Array.from({ length: slideCount }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-10 h-1 mb-5 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-white'
                            }`}
                        onClick={() => setSlideIndex(index)}
                    />
                ))}
            </div>
        )} {...settingCarousel}>
            <div className="h-[85vh] w-full flex justify-center items-center text-4xl font-semibold bg-primary text-primary-foreground">1</div>
            <div className="h-[85vh] w-full flex justify-center items-center text-4xl font-semibold bg-primary text-primary-foreground">2</div>
            <div className="h-[85vh] w-full flex justify-center items-center text-4xl font-semibold bg-primary text-primary-foreground">3</div>
            <div className="h-[85vh] w-full flex justify-center items-center text-4xl font-semibold bg-primary text-primary-foreground">4</div>
            <div className="h-[85vh] w-full flex justify-center items-center text-4xl font-semibold bg-primary text-primary-foreground">5</div>
        </Carousel>
    )
}

export default HeroSlider