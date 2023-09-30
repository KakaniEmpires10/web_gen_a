'use client'
import Image from "next/image";
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
            <div className="relative h-[87vh] w-full bg-cover bg-center bg-gradient-to-t from-black/90 to-transparent">
                <Image src="/background/bg-slide-1.jpg" alt="" fill className="mix-blend-overlay" />
            </div>
            <div className="relative h-[87vh] w-full bg-cover bg-center bg-gradient-to-t from-black/90 to-transparent">
                <Image src="/background/bg-slide-2.jpg" alt="" fill className="mix-blend-overlay" />
            </div>
            <div className="relative h-[87vh] w-full bg-cover bg-center bg-gradient-to-t from-black/90 to-transparent">
                <Image src="/background/bg-slide-3.jpg" alt="" fill className="mix-blend-overlay" />
            </div>
            <div className="relative h-[87vh] w-full bg-cover bg-center bg-gradient-to-t from-black/90 to-transparent">
                <Image src="/background/bg-slide-4.jpeg" alt="" fill className="mix-blend-overlay" />
            </div>
        </Carousel>
    )
}

export default HeroSlider