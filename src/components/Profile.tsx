import { useContext } from 'react'
import { useSession } from 'next-auth/client'

import { UserCircle } from 'phosphor-react'

import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const [session, loading] = useSession()
    const { level } = useContext(ChallengesContext)
    return (
        <>
            {
                session ?
                    (
                        <div className={styles.profileContainer}>
                            <img src={session.user.image} alt="user" />
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
                            <div>
                                <div className={styles.userContainer}>
                                    <UserCircle size={30}/>
                                    <strong>Usuário não identificado</strong>
                                </div>
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