import { useContext, useEffect, useState } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/PercentageBar.module.css'

export function PercentageBar() {
    const {
        time,
        theTime
    } = useContext(CountdownContext)
    const [width, setWidth] = useState(0)
    let percent = 100 / (theTime)

    useEffect(() => {
        setWidth(width + percent)
    }, [time])

    useEffect(() => {
        setWidth(0)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.bar} style={{ width: `${width}%` }}></div>
        </div>
    )
}