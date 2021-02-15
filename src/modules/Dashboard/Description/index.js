import React from 'react'
import { DescriptionLine } from 'components'


const Description = ({ peopleTotalCount, starshipsTotalCount }) => {
    return (
        <>
            <DescriptionLine>The game is very simple! You just need to select a deck of cards between people and starships and introduce the number of players.</DescriptionLine>
            <DescriptionLine>There are <b>{peopleTotalCount}</b> cards (people) and <b>{starshipsTotalCount}</b> cards (starships). These cards are unique so there is no chance of drawing the same card twice.</DescriptionLine>
            <DescriptionLine>Once you click on the "Play" button a card will be randomly assigned to each player and the winner (or winners in case of draw) will be the one with the highest score.</DescriptionLine>
            <DescriptionLine>The score depends on the "Height" (people) and "Hyperdrive Rating" (starships).</DescriptionLine>
        </>
    )
}

export default Description
