import { createContext, JSXElementConstructor, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    isActive: boolean;
    time: number;
    theTime: number;
    hasFinished: boolean;
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
    const theTime = .1 * 60

    const [time, setTime] = useState(theTime)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true)
    }
    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(theTime)
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

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            isActive,
            hasFinished,
            startCountdown,
            resetCountdown,
            time,
            theTime
        }}>
            { children}
        </CountdownContext.Provider>
    )
}