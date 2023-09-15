'use client'

import { motion } from "framer-motion"
import style from "@/app/style/map.module.css"

const MapAddress = () => {
    return (
        <div className="h-full flex flex-wrap justify-center gap-5 lg:justify-around items-center">
            <motion.div className={style.mapouter}>
                <div className={style.gmap_canvas}>
                    <iframe className="w-full h-full rounded-2xl" src="https://maps.google.com/maps?width=600&amp;height=600&amp;hl=en&amp;q=stemcell, banda aceh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                </div>
            </motion.div>
            <div className="px-10">
                <h4>Alamat :</h4>
                <p>Jln. Tgk. Lam U No.6, Kota Baru, Kec. Kuta Alam, Kota Banda Aceh, Aceh 23125</p>
            </div>
        </div>
    )
}

export default MapAddress