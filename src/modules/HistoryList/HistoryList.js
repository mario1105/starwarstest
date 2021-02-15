import React from 'react'
import { useHistory } from "react-router-dom"
import { Button, Container, MainHeader, Panel, SubHeader } from "components"
import HistoryListItem from "./HistoryListItem"

const HistoryList = ({ winnersList }) => {
    const history = useHistory()

    const handleClick = () => {
        history.push("/dashboard")
    }

    return(
        <Container>
            <MainHeader>
                History List
            </MainHeader>
            <Panel>
                <SubHeader>Check here all the winners from this session games!</SubHeader>
                <Button style={{ maxWidth:'8vw', backgroundColor: '#002395'}} onClick={handleClick}>Dashboard</Button>
                {winnersList.length
                    ? <table style={{ minWidth: '70vw', marginTop: '2em'}}>
                        <tbody>
                        <tr>
                            <th key={'game-number'}>{'Game #'}</th>
                            <th key={'player'}>{'Player'}</th>
                            <th key={'deck'}>{'Deck'}</th>
                            <th key={'card-name'}>{'Card Name'}</th>
                            <th key={'power'}>{'Power'}</th>
                        </tr>
                        {winnersList.map(({__typename: typeName, player, gameNumber, name, ...rest}, index) =>
                            <HistoryListItem
                                key={index}
                                typeName={typeName}
                                player={player}
                                gameNumber={gameNumber}
                                name={name}
                                power={typeName === 'Person' ? rest.height : rest.hyperdriveRating}
                            />

                        )}
                        </tbody>
                    </table>
                    : <p>The table is empty. Please play some games then the result will be printed here.</p>}
            </Panel>
        </Container>
    )
}

export default HistoryList
