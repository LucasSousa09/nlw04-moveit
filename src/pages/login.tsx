import Head from 'next/head'
import { SyntheticEvent, useEffect, useState } from 'react'
import connect from '../utils/database'

import styles from '../styles/pages/Login.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Login() {
    const [session, loading] = useSession()
    const [buttonColor, setButtonColor] = useState('#4953B8')

    return (
        <div className={styles.container}>
            <Head>
                <title>
                    Login | move.it
                </title>
            </Head>

            <div className={styles.loginContainer}>
                <img src="/logo.png" alt="Logo" />
                <h1>Bem-vindo</h1>
                <div className={styles.githubContainer}>
                    <img src="/icons/github_icon.png" alt="GitHub Logo" />
                    <p>Faça seu login com seu Github para começar</p>
                </div>
                <div className={styles.inputContainer}>
                    <>
                        {!session && <>
                            <button className={styles.connectButton} onClick={() => {
                                signIn(
                                    'github',
                                    { callbackUrl: 'http://localhost:3000/' }
                                )
                            }}>Connect with GitHub</button>
                        </>}
                        {session && <>
                            Signed in as {session.user.name} <br />
                            <button onClick={() => signOut()}>Sign out</button>
                        </>}
                    </>
                </div>
            </div>
        </div>
    )
}