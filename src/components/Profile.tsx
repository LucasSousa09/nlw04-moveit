import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'
import { useSession } from 'next-auth/client'

export function Profile() {
    const [session, loading] = useSession()
    const { level } = useContext(ChallengesContext)
    return (
        <>
            {
                session ?
                    (
                        <div className={styles.profileContainer}>
                            <img src={session.user.image} alt="LucasRodrigues" />
                            <div>
                                <strong>{session.user.name}</strong>
                                <p>
                                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                                </p>
                            </div>
                        </div>
                    ) :
                    (
                        <div className={styles.profileContainer}>
                            <img src="" alt="LucasRodrigues" />
                            <div>
                                <strong>Usuário não identificado</strong>
                                <p>
                                    <img src="icons/level.svg" alt="Level" />
                                    Level {level}
                                </p>
                            </div>
                        </div>
                    )

            }
        </>
    )
}