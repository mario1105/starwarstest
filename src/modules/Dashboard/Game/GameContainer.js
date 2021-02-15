import React, { useState, useEffect, useContext } from 'react'
import { useLazyQuery } from '@apollo/client'
import Game from './Game'
import { getPeopleQuery } from 'graphql/queries/people'
import { getStarshipsQuery } from 'graphql/queries/starships'
import { getRandomNumber } from 'util/randomNumber'
import { GameContext } from "./GameContext"

const getNumberOfPlayersParameters = (value, totalCount) => {
    if(value < 2){
        return ({value, error: true, errorText: 'Please introduce at least two players'})
    } else if(value > totalCount){
        return({
            value,
            error: true,
            errorText: `The number of players is limited by the deck size (${totalCount})`
        })
    } else {
        return({value, error: false, errorText: 'No error'})
    }
}

const GameContainer = ({ peopleTotalCount, starshipsTotalCount }) => {
    const [winnersList, setWinnersList, gameNumber, setGameNumber] = useContext(GameContext)

    const [numberOfPlayers, setNumberOfPlayers] = useState({value: 2, error: false, errorText: 'No error'})
    const [deck, setDeck] = useState('people')
    const [sortedResult, setSortedResult] = useState([])
    const [selectedDeckParameters, setSelectedDeckParameters] = useState(
        {
            getQuery: ()=>null,
            last: 0,
            first: 0,
            entities: [],
            power: ''
        }
    )

    const [getSelectedDeckData, { data, error }] = useLazyQuery(selectedDeckParameters.getQuery(
        {
            last: selectedDeckParameters.last,
            first: selectedDeckParameters.first
        })
    )

    useEffect(() => {
        if(data){
            const dataWithPlayer = data[selectedDeckParameters.entities[0]][selectedDeckParameters.entities[1]].map((item, index) => (
                {
                    ...item,
                    player: index + 1
                }
            ))
            const sortedData = [...dataWithPlayer].sort((a, b) => b[selectedDeckParameters.power] - a[selectedDeckParameters.power])
            setSortedResult(sortedData.map(
                (item) => ({...item, gameNumber, winner: item[selectedDeckParameters.power] === sortedData[0][selectedDeckParameters.power] })
            ))
        }
    }, [data])

    useEffect(() => {
        if(sortedResult.length){
            setWinnersList([...winnersList, ...sortedResult.filter(({winner}) => winner)])
            setGameNumber(gameNumber+1)
        }
    }, [sortedResult])


    const handleDeck = e => {
        const value = e.target.value
        const totalCount = value === 'people' ? peopleTotalCount : starshipsTotalCount
        setDeck(value)
        setNumberOfPlayers(getNumberOfPlayersParameters(numberOfPlayers.value, totalCount))
    }

    const handleNumberOfPlayers = e => {
        const totalCount = deck === 'people' ? peopleTotalCount : starshipsTotalCount
        setNumberOfPlayers(getNumberOfPlayersParameters(parseInt(e.target.value), totalCount))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(deck === 'people'){
            setSelectedDeckParameters({
                getQuery: getPeopleQuery,
                last: numberOfPlayers.value,
                first: getRandomNumber(numberOfPlayers.value, peopleTotalCount),
                entities: ['allPeople', 'people'],
                power: 'height'
            })
        } else {
            setSelectedDeckParameters({
                getQuery: getStarshipsQuery,
                last: numberOfPlayers.value,
                first: getRandomNumber(numberOfPlayers.value, starshipsTotalCount),
                entities: ['allStarships', 'starships'],
                power: 'hyperdriveRating'
            })
        }
        getSelectedDeckData()
    }

    return (
        <Game
            numberOfPlayers={numberOfPlayers}
            deck={deck}
            onSubmitError={error}
            sortedResult={sortedResult}
            activeDeckPower={selectedDeckParameters.power}
            handleNumberOfPlayers={handleNumberOfPlayers}
            handleDeck={handleDeck}
            handleOnSubmit={handleOnSubmit}
        />
    )
}

export default GameContainer
