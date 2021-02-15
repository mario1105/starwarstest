import React from 'react'
import { shallow } from 'enzyme'
import CardsList from "../CardsList"
import { StarshipsCardsListItem, PeopleCardsListItem } from "../CardsListItem"
import { Button } from 'components'
import { sortedListPeople, sortedListStarships } from "./__fixtures__/sortedList"
import reactRouterMock from 'react-router-dom'

jest.mock('react-router-dom', () => {
    const pushMock = jest.fn()
    return({
        useHistory: () => ({ push: pushMock })
    })
})

const renderComponent = ({ sortedResult, activeDeckPower }) =>
    shallow(<CardsList sortedResult={sortedResult} activeDeckPower={activeDeckPower} />)


let wrapper
describe('CardsList Unit Tests', () => {
    beforeEach( () => {
        wrapper = renderComponent({ sortedResult: sortedListPeople, activeDeckPower: 'height' })
    })
    it('renders the history button', () => {
        expect(wrapper.find(Button).contains('HISTORY')).toBe(true)
    })
    it('calls the push method from useHistory after clicking on the button', () => {
        wrapper.find(Button).simulate('click')
        expect(reactRouterMock.useHistory().push).toHaveBeenCalled()
    })
    describe('when the cards are from the People desk', () => {
        it('renders the correct number of PeopleCardsListItem', () => {
            expect(wrapper.find(PeopleCardsListItem)).toHaveLength(2)
        })
        it('passes the right props to PeopleCardsListItem', () => {
            sortedListPeople.forEach((item, index) => {
                expect(wrapper.find(PeopleCardsListItem).at(index).props().winner).toBe(item.winner)
                expect(wrapper.find(PeopleCardsListItem).at(index).props().player).toBe(item.player)
                expect(wrapper.find(PeopleCardsListItem).at(index).props().height).toBe(item.height)
                expect(wrapper.find(PeopleCardsListItem).at(index).props().name).toBe(item.name)
                expect(wrapper.find(PeopleCardsListItem).at(index).props().birthYear).toBe(item.birthYear)
                expect(wrapper.find(PeopleCardsListItem).at(index).props().mass).toBe(item.mass)
            })
        })
    })
    describe('when the cards are from the Starships desk', () => {
        beforeEach( () => {
            wrapper = renderComponent({ sortedResult: sortedListStarships, activeDeckPower: 'hyperdriveRating' })
        })
        it('renders the correct number of StarshipsCardsListItem', () => {
            expect(wrapper.find(StarshipsCardsListItem)).toHaveLength(2)
        })
        it('passes the right props to StarshipsCardsListItem', () => {
            sortedListStarships.forEach((item, index) => {
                expect(wrapper.find(StarshipsCardsListItem).at(index).props().winner).toBe(item.winner)
                expect(wrapper.find(StarshipsCardsListItem).at(index).props().player).toBe(item.player)
                expect(wrapper.find(StarshipsCardsListItem).at(index).props().hyperdriveRating).toBe(item.hyperdriveRating)
                expect(wrapper.find(StarshipsCardsListItem).at(index).props().name).toBe(item.name)
                expect(wrapper.find(StarshipsCardsListItem).at(index).props().length).toBe(item.length)
                expect(wrapper.find(StarshipsCardsListItem).at(index).props().costInCredits).toBe(item.costInCredits)
            })
        })
    })
})

