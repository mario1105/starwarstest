import React, { useContext } from 'react'
import { GameContext } from "../Dashboard/Game/GameContext"
import HistoryList from "./HistoryList"

const HistoryListContainer = () => {
    const [winnersList] = useContext(GameContext)

    return(
        <HistoryList winnersList={winnersList} />
    )
}

export default HistoryListContainer
