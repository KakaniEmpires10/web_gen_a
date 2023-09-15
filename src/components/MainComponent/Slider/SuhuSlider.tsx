"use client"

import Carousel from "nuka-carousel"
import CardProfile from "../Card/CardProfile"

const SuhuSlider = () => {
    return (
        <div className="flex justify-center text-black">
            <Carousel
                className="py-7"
                slidesToShow={3}
                animation="zoom"
                zoomScale={0.9}
                cellAlign="center"
                withoutControls
                slideIndex={1}
                dragging={false}
                swiping={false}
                
            >
                <CardProfile name="Fara Khairunnisa" jabatan="Bendahara Umum" />
                <CardProfile name="Hendra" jabatan="Ketua Umum" />
                <CardProfile
                    name="Luthfiya Az-Zuhra"
                    jabatan="Sekretaris Umum"
                />
            </Carousel>
        </div>
    )
}

export default SuhuSlider