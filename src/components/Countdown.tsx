import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import { PercentageBar } from '../components/PercentageBar'
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                    <img src="icons/check_circle.svg" alt="Check Circle" />
                </button>
            ) : <>
                    {isActive ? (
                        <button
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}>
                            Abandonar ciclo
                            <PercentageBar />
                            <img src="/icons/x-icon.svg" alt="X Icon" />
                        </button>
                    ) : (
                            <button
                                type="button"
                                className={styles.countdownButton}
                                onClick={() => { startCountdown() }}>
                                Iniciar um ciclo
                                <img src="/icons/play_arrow.svg" alt="Play Icon" />
                            </button>
                        )}
                </>}
        </div>
    )
}