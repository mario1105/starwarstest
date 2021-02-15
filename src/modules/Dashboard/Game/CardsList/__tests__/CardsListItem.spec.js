import React from 'react'
import { shallow } from 'enzyme'
import { StarshipsCardsListItem, PeopleCardsListItem } from "../CardsListItem"
import {
    findPeopleCardsListItemHeight,
    findPeopleCardsListItemMass,
    findPeopleCardsListItemName,
    findPeopleCardsListItemPlayer,
    findPeopleCardsListItemYearOfBirth,
    findStarshipsCardsListItemCost,
    findStarshipsCardsListItemHyperdriveRating,
    findStarshipsCardsListItemLength,
    findStarshipsCardsListItemName,
    findStarshipsCardsListItemPlayer
} from "./selectors"

const getPersonParameters = ({ winner }) => ({
    winner,
    player: 1,
    height: 180,
    name: 'Mario Jimenez',
    birthYear: '1995',
    mass: 80
})

const getPersonExpectedResult = ({ winner }) => ({
    player: winner ? 'Winner: PLAYER 1' : 'PLAYER 1',
    height: 'Height: 180cm',
    name: 'Name: Mario Jimenez',
    birthYear: 'Year of Birth: 1995',
    mass: 'Mass: 80kg'
})

const getStarshipParameters = ({ winner }) => ({
    winner,
    player: 2,
    hyperdriveRating: '10',
    name: 'Best Starship Ever Made',
    length: '200',
    costInCredits: '999999999'
})

const getStarshipExpectedResult = ({ winner }) => ({
    player: winner ? 'Winner: PLAYER 2' : 'PLAYER 2',
    hyperdriveRating: 'Hyperdrive Rating: 10',
    name: 'Name: Best Starship Ever Made',
    length: 'Length: 200m',
    costInCredits: 'Cost: 999999999 credits'
})


const renderComponent = ({ component, winner }) => component === 'PeopleCardsListItem'
    ? shallow(<PeopleCardsListItem {...getPersonParameters({ winner })} />)
    : shallow(<StarshipsCardsListItem {...getStarshipParameters({ winner })} />)


let wrapper
let expectedResultPerson
let expectedResultStarship
describe('CardsListItem Unit Tests', () => {
    describe('PeopleCardsListItem', () => {
        expectedResultPerson = getPersonExpectedResult({ winner: false })
        beforeEach( () => {
            wrapper = renderComponent({ component: 'PeopleCardsListItem', winner: false })
        })

        it('renders the item with the right parameters', () => {
            expect(findPeopleCardsListItemHeight(wrapper).contains(expectedResultPerson.height)).toBe(true)
            expect(findPeopleCardsListItemName(wrapper).contains(expectedResultPerson.name)).toBe(true)
            expect(findPeopleCardsListItemYearOfBirth(wrapper).contains(expectedResultPerson.birthYear)).toBe(true)
            expect(findPeopleCardsListItemMass(wrapper).contains(expectedResultPerson.mass)).toBe(true)
        })
        describe('when the player is not the winner', () => {
            it('renders the player header correctly', () => {
                expect(findPeopleCardsListItemPlayer(wrapper).contains(expectedResultPerson.player)).toBe(true)
            })
        })
        describe('when the player is the winner', () => {
            it('renders the player header correctly', () => {
                wrapper = renderComponent({ component: 'PeopleCardsListItem', winner: true })
                expectedResultPerson = getPersonExpectedResult({ winner: true })
                expect(findPeopleCardsListItemPlayer(wrapper).contains(expectedResultPerson.player)).toBe(true)
            })
        })
    })

    describe('StarshipsCardsListItem', () => {
        expectedResultStarship = getStarshipExpectedResult({ winner: false })
        beforeEach( () => {
            wrapper = renderComponent({ component: 'StarshipsCardsListItem', winner: false })
        })

        it('renders the item with the right parameters', () => {
            expect(findStarshipsCardsListItemHyperdriveRating(wrapper).contains(expectedResultStarship.hyperdriveRating)).toBe(true)
            expect(findStarshipsCardsListItemName(wrapper).contains(expectedResultStarship.name)).toBe(true)
            expect(findStarshipsCardsListItemLength(wrapper).contains(expectedResultStarship.length)).toBe(true)
            expect(findStarshipsCardsListItemCost(wrapper).contains(expectedResultStarship.costInCredits)).toBe(true)
        })
        describe('when the player is not the winner', () => {
            it('renders the player header correctly', () => {
                expect(findStarshipsCardsListItemPlayer(wrapper).contains(expectedResultStarship.player)).toBe(true)
            })
        })
        describe('when the player is the winner', () => {
            it('renders the player header correctly', () => {
                wrapper = renderComponent({ component: 'StarshipsCardsListItem', winner: true })
                expectedResultStarship = getStarshipExpectedResult({ winner: true })
                expect(findStarshipsCardsListItemPlayer(wrapper).contains(expectedResultStarship.player)).toBe(true)
            })
        })
    })

})

