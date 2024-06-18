import React, { useEffect } from "react"
import * as styles from "./TitleStyles.module.css"
import { GoogleSpreadsheet } from "google-spreadsheet"

interface IProps {
    creds: any
}

export const Main = (props: IProps) => {

    const doc = new GoogleSpreadsheet(
        '1Wm8Y8eq3-unGJOyjaMf5EK_v22kKESYmPFaFo8uQCuk', { token:  props.creds.access_token}
    )

    const init = async () => {
        await doc.loadInfo() // loads document properties and worksheets
        console.log(doc.title)
        const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
        console.log('sheet', sheet);
    }

    useEffect(() => { init()}, [])


    const addSheet = async () => {
        const sheet = await doc.addSheet({ headerValues: ['name', 'email'] });
    }

    return (
        <>
        main
    <button onClick={() => addSheet()}>add sheet</button>
        </>
    )
}
