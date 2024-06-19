import React, { useEffect, useState } from 'react'
import * as styles from './App.module.css'
import axios from 'axios'
import { Title } from './components/Title/Title'
import { Main } from './components/Main/Main'

export const App = () => {
    const [sheets, setSheets] = useState<any>()

    const getSheet = async () => {
        const res = await axios.get(
            'https://script.google.com/macros/s/AKfycbyJFvJThy4prpVJgJXz-fdR01p1ShQUs4qHHlAxY-gifcHsb4hRF83VofuVx6N81_uqUA/exec'
        )
        console.log(res)
        res.data && setSheets(res.data)
    }

    useEffect(() => {
        getSheet()
    }, [])

    return (
        <div className={styles.app_container}>
            <video className={styles.video_bg} width="100%" autoPlay muted loop playsInline>
                <source src="https://media.istockphoto.com/id/1967486479/ru/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/%D1%84%D0%B8%D0%BE%D0%BB%D0%B5%D1%82%D0%BE%D0%B2%D1%8B%D0%B5-%D0%B8-%D1%81%D0%B8%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B5%D0%BE%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BE%D0%B3%D0%BD%D0%B8-%D0%B2-%D1%82%D0%B5%D0%BC%D0%BD%D1%8B%D1%85-%D0%B4%D0%B6%D1%83%D0%BD%D0%B3%D0%BB%D1%8F%D1%85-%D1%81-%D1%82%D1%80%D0%BE%D0%BF%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%BC%D0%B8-%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D1%8F%D0%BC%D0%B8-%D1%86%D0%B8%D0%BA%D0%BB%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F.mp4?s=mp4-640x640-is&k=20&c=eMr_WMxRUCNUfrzyjainUfGYHbuE33PMhp3PmrW3Tls="></source>
            </video>
            <div className={styles.app_layout}>
                <Title />
                <Main sheets={sheets} />
            </div>
        </div>
    )
}
