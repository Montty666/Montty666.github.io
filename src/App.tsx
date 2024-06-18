import React, { useState } from 'react'
import * as styles from './App.module.css'
import { Title } from './components/Title/Title'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { useGoogleLogin } from '@react-oauth/google'
import { Main } from './components/Main/Main'

export const App = () => {
    const [creds, setCreds] = useState<any>()
    const [errLogin, setErrLogin] = useState<boolean>(false)

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse)
            setCreds(tokenResponse)
        },
      });

    if (!creds) {
        return (
            <div className={styles.app_container}>
                <div className={styles.app_layout}>
                    <button onClick={() => login()}>log in</button>
                </div>
            </div>
        )
    }

    if (errLogin) {
        return (
            <div className={styles.app_container}>
                <div className={styles.app_layout}>
                    Matrix has no you...
                </div>
            </div>
        )
    }

    return (
        <div className={styles.app_container}>
            <div className={styles.app_layout}>
                <Title />
                <Main creds={creds}/>
            </div>
        </div>
    )
}
