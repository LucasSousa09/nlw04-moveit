import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

import styles from '../styles/pages/Login.module.css'

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <img src="/logo.png" alt="Logo" />
                <h1>Bem-vindo</h1>
                <div className={styles.githubContainer}>
                    <img src="/icons/github_icon.png" alt="GitHub Logo" />
                    <p>Faça seu login com seu Github para começar</p>
                </div>
                <div className={styles.inputContainer}>
                    <input type="text" placeholder="Digite seu username" />
                    <button>
                        <img src="/icons/arrow_right.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}