import { createContext, JSXElementConstructor, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    isActive: boolean;
    hasFinished: boolean;
    PercentageBar: React.ElementType;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)
let countdownTimeout: NodeJS.Timeout

export function CountdownProvider({ children }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(25 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)
    const [barPercentage, setBarPercentage] = useState(0)


    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    let percent = 100 / (25 * 60)

    // Width: 1000%

    useEffect(() => {
        setBarPercentage(barPercentage + percent)
        console.log(barPercentage)
    }, [time])

    function startCountdown() {
        setIsActive(true)
    }
    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(25 * 60)
        setHasFinished(false)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }
        else if (isActive && time === 0) {
            startNewChallenge()
            setHasFinished(true)
            setIsActive(false)
        }
    }, [isActive, time])

    function PercentageBar() {
        return (
            <div style={{ height: '4px', width: '100%', background: 'var(--gray-line)' }}>
                <div style={{ height: '4px', width: `${barPercentage}%`, backgroundColor: "var(--green)", transition: '1s ease' }}></div>
            </div>
        )
    }


    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            isActive,
            hasFinished,
            startCountdown,
            resetCountdown,
            PercentageBar,
        }}>
            { children}
        </CountdownContext.Provider>
    )
}