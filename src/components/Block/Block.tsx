import React, { useEffect } from 'react'
import * as styles from './Block.module.css'

interface IProps {
    user: any
    whom: any
}

export const Block = (props: IProps) => {
    console.log('items ', props.whom, props.user)
    const renderItem = (item:any, idx:number) => {
        return <div  className={styles.item_container} key={idx}>
            <img width="80px" height="80px" src={item.PICTURE_URL} className={styles.rotate}/>
            <span>{item.TITLE}</span>
            <span>{item.QTY}</span>
        </div>
    }
    return (
        <div className={styles.block_container}>
            {props.whom}
            {props.user.map(renderItem)}
        </div>
    )
}
