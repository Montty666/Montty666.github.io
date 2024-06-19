import React, { useEffect } from 'react'
import * as styles from './Main.module.css'
import { Block } from '../Block/Block'

interface IProps {
    sheets: any
}

export const Main = (props: IProps) => {
    const getUsersItems = (sheet:any) => {
        let blocks = [] as any
        for (const user in props.sheets) {
            blocks.push(<Block user={props.sheets[user]} whom={user}/>)
          }
          return blocks
    }
    return (
        <div className={styles.items_container}>
            {getUsersItems(props.sheets)}
        </div>
    )
}
