import React, {createContext, useState} from "react"

export const GameContext = createContext([[], () => [], 1, () => null])

export const GameProvider = (props) => {
    const [winnersList, setWinnersList] = useState([])
    const [gameNumber, setGameNumber] = useState(1)

    return (
        <GameContext.Provider value={[winnersList, setWinnersList, gameNumber, setGameNumber]}>
            {props.children}
        </GameContext.Provider>
    )
}
