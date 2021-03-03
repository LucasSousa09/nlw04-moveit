import { useContext, useEffect, useState } from 'react'
import { Profile } from '../components/Profile'
import { CompletedChalenges } from '../components/CompletedChalenges'
import { Countdown } from '../components/Countdown'
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Section.module.css'

export function Section() {
    const { hasFinished } = useContext(CountdownContext)
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })
    })

    return (
        <section>
            {
                windowWidth > 660
                    ?
                    <>
                        <div className={styles.leftSide}>
                            <Profile />
                            <CompletedChalenges />
                            <Countdown />
                        </div>
                        <div className={styles.rightSide}>
                            <ChallengeBox />
                        </div>
                    </>
                    :
                    <>
                        {
                            hasFinished === false
                                ?
                                <div className={styles.leftSide}>
                                    <Profile />
                                    <CompletedChalenges />
                                    <Countdown />
                                </div>
                                :
                                <div className={styles.rightSide}>
                                    <ChallengeBox />
                                </div>
                        }
                    </>
            }
        </section>
    )
}