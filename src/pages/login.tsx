import Head from 'next/head'
import { useEffect, useState } from 'react'

import styles from '../styles/pages/Login.module.css'

export default function Login() {
    const [buttonColor, setButtonColor] = useState('#4953B8')

    useEffect(() => {
        let inputEl = document.getElementById('input')
        inputEl.addEventListener('keyup', (evt) => {
            if (evt.target.value === '') {
                setButtonColor('#4953B8')
            }
            else {
                setButtonColor('#4CD62B')
            }
        })
    }, [])

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
                    <input id="input" type="text" placeholder="Digite seu username" />
                    {
                        buttonColor === '#4953B8' ? (
                            <button style={{ background: `${buttonColor}` }}>
                                <img src="/icons/arrow_right.png" alt="" />
                            </button>) : (
                                <button style={{ background: `${buttonColor}` }}>
                                    <img src="/icons/arrow_right.png" alt="" />
                                </button>
                            )
                    }

                </div>
            </div>
        </div>
    )
}