import React from 'react'
import { shallow } from 'enzyme'
import HistoryList from "../HistoryList"
import HistoryListItem from "../HistoryListItem"
import { Button } from 'components'
import winnersList from "./__fixture__/winnersList"
import reactRouterMock from 'react-router-dom'

jest.mock('react-router-dom', () => {
    const pushMock = jest.fn()
    return({
        useHistory: () => ({ push: pushMock })
    })
})

const renderComponent = ({ winnersList}) => shallow(<HistoryList winnersList={winnersList} />)


let wrapper
describe('HistoryList Unit Tests', () => {
    beforeEach( () => {
        wrapper = renderComponent({ winnersList })
    })
    it('renders the dashboard button', () => {
        expect(wrapper.find(Button).contains('Dashboard')).toBe(true)
    })
    it('calls the push method from useHistory after clicking on the button', () => {
        wrapper.find(Button).simulate('click')
        expect(reactRouterMock.useHistory().push).toHaveBeenCalled()
    })
    describe('when the winners list is not empty', () => {
        it('renders the correct number of HistoryListItem', () => {
            expect(wrapper.find(HistoryListItem)).toHaveLength(2)
        })
        it('passes the right props to HistoryListItem', () => {
            winnersList.forEach((item, index) => {
                expect(wrapper.find(HistoryListItem).at(index).props().typeName).toBe(item.__typename)
                expect(wrapper.find(HistoryListItem).at(index).props().player).toBe(item.player)
                expect(wrapper.find(HistoryListItem).at(index).props().name).toBe(item.name)
                expect(wrapper.find(HistoryListItem).at(index).props().gameNumber).toBe(item.gameNumber)
            })
            expect(wrapper.find(HistoryListItem).at(0).props().power).toBe(winnersList[0].height)
            expect(wrapper.find(HistoryListItem).at(1).props().power).toBe(winnersList[1].hyperdriveRating)
        })
        it('does not render the zero state message', () => {
            expect(
                wrapper
                    .find('p')
                    .contains('The table is empty. Please play some games then the result will be printed here.')
            ).toBe(false)
        })
    })
    describe('when the cards are from the Starships desk', () => {
        beforeEach( () => {
            wrapper = renderComponent({ winnersList: [] })
        })
        it('does not render any HistoryListItem', () => {
            expect(wrapper.find(HistoryListItem)).toHaveLength(0)
        })
        it('renders the zero state message', () => {
            expect(
                wrapper
                    .find('p')
                    .contains('The table is empty. Please play some games then the result will be printed here.')
            ).toBe(true)
        })
    })
})

