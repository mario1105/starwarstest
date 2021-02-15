import React from 'react'
import { Card } from 'components'

export const PeopleCardsListItem = ({ winner, player, height, name, birthYear, mass }) => {
    return (
        <Card data-test-id={'people-cards-list-item'} winner={winner}>
            <div
                data-test-id={'people-cards-list-item-player'}
                style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid black'}}
            >
                {`${winner ? `Winner: PLAYER ${player}` : `PLAYER ${player}`}`}
            </div>
            <div style={{ marginLeft: '1em'}}>
                <h3 data-test-id={'people-cards-list-item-height'}>{`Height: ${!!height ? height + 'cm' : 'unknown'}`}</h3>
                <p data-test-id={'people-cards-list-item-name'}>{`Name: ${name}`}</p>
                <p data-test-id={'people-cards-list-item-year-of-birth'}>{`Year of Birth: ${birthYear}`}</p>
                <p data-test-id={'people-cards-list-item-mass'}>{`Mass: ${!!mass ? mass + 'kg' : 'unknown'}`}</p>
            </div>
        </Card>
    )
}

export const StarshipsCardsListItem = ({ winner, player, hyperdriveRating, name, length, costInCredits }) => {
    return (
        <Card data-test-id={'starships-cards-list-item'} winner={winner}>
            <div
                data-test-id={'starships-cards-list-item-player'}
                style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid black'}}>
                {`${winner ? `Winner: PLAYER ${player}` : `PLAYER ${player}`}`}
            </div>
            <div style={{ marginLeft: '1em'}}>
                <h3 data-test-id={'starships-cards-list-item-hyperdrive-rating'}>{`Hyperdrive Rating: ${!!hyperdriveRating ? hyperdriveRating : 'unknown'}`}</h3>
                <p data-test-id={'starships-cards-list-item-name'}>{`Name: ${name}`}</p>
                <p data-test-id={'starships-cards-list-item-length'}>{`Length: ${length}m`}</p>
                <p data-test-id={'starships-cards-list-item-cost'}>{`Cost: ${!!costInCredits ? costInCredits + ' credits' : 'unknown'}`}</p>
            </div>
        </Card>
    )
}
