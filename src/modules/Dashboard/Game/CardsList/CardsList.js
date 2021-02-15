import React, {memo} from 'react'
import { Panel, SubHeader, Button } from 'components'
import { PeopleCardsListItem ,StarshipsCardsListItem } from "./CardsListItem"
import { useHistory } from 'react-router-dom'



const CardsList = ({ sortedResult, activeDeckPower }) => {
    const history = useHistory()
    const handleClick = () => {
        history.push("/history")
    }

    return (
        <Panel>
            <SubHeader>Result</SubHeader>
            <Button style={{marginLeft: 'none', maxWidth:'8vw', backgroundColor: '#002395'}} onClick={handleClick}>HISTORY</Button>
            <div data-test-id={'cards-list'} style={{ display: 'flex', flexWrap: 'wrap' }}>
                {activeDeckPower === 'height'
                    ? sortedResult.map(({id, winner, player, height, name, birthYear, mass}) =>
                        <PeopleCardsListItem
                            key={id}
                            winner={winner}
                            player={player}
                            height={height}
                            name={name}
                            birthYear={birthYear}
                            mass={mass}
                        />
                    )
                    : sortedResult.map(({id, winner, player, hyperdriveRating, name, length, costInCredits}) =>
                        <StarshipsCardsListItem
                            key={id}
                            winner={winner}
                            player={player}
                            hyperdriveRating={hyperdriveRating}
                            name={name}
                            length={length}
                            costInCredits={costInCredits}
                        />
                    )
                }
            </div>
        </Panel>
    )
}

export default CardsList
