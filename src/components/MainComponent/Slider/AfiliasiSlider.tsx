'use client'

import Carousel from "nuka-carousel"
import { useState } from "react";

// interface afiliasiHeight {
//     height : string
// }

const AfiliasiSlider = () => {
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
                        className={`w-5 md:w-7 h-[2px] xl:w-10 lg:h-1 mb-5 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-white'
                            }`}
                        onClick={() => setSlideIndex(index)}
                    />
                ))}
            </div>
        )} {...settingCarousel}>
            <div className="w-full h-[60vh] flex justify-center items-center text-4xl font-semibold bg-third text-third-foreground">1</div>
            <div className="w-full h-[60vh] flex justify-center items-center text-4xl font-semibold bg-third text-third-foreground">2</div>
            <div className="w-full h-[60vh] flex justify-center items-center text-4xl font-semibold bg-third text-third-foreground">3</div>
            <div className="w-full h-[60vh] flex justify-center items-center text-4xl font-semibold bg-third text-third-foreground">4</div>
        </Carousel>
    )
}

export default AfiliasiSlider