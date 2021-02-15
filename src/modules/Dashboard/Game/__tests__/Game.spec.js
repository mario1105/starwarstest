import React from 'react'
import { shallow } from 'enzyme'
import Game from '../Game'
import { Select, Input, Button, ErrorText } from 'components'
import CardsList from "../CardsList"

const handleNumberOfPlayers = jest.fn()
const handleDeck = jest.fn()
const handleOnSubmit = jest.fn()

const getParameters = ({ numberOfPlayers, deck, onSubmitError, sortedResult, activeDeckPower }) => ({
    numberOfPlayers,
    deck,
    onSubmitError,
    sortedResult,
    activeDeckPower,
    handleNumberOfPlayers,
    handleDeck,
    handleOnSubmit
})

const renderComponent = ({ numberOfPlayers, deck, onSubmitError, sortedResult, activeDeckPower }) =>
    shallow(
        <Game {...getParameters({ numberOfPlayers, deck, onSubmitError, sortedResult, activeDeckPower })}/>
    )

let wrapper
describe('Game Unit Tests', () => {
    describe('when the result array is empty (no errors)', () => {
        beforeEach( () => {
            wrapper = renderComponent(
                {
                    numberOfPlayers: {value: 2, error: false, errorText: ''},
                    deck: 'people',
                    onSubmitError: false,
                    sortedResult: [],
                    activeDeckPower: 'height'
                })
        })

        it('does not render the CardsList component', () => {
            expect(wrapper.find(CardsList)).toHaveLength(0)
        })
        it('renders the Select component with the value passed as props', () => {
            expect(wrapper.find(Select).props().value).toBe('people')
        })
        it('calls the handler when the Select onChange event is triggered', () => {
            wrapper.find(Select).simulate('change', 'starships')
            expect(handleDeck).toHaveBeenCalledWith('starships')
        })
        it('renders the Input component with the value passed as props', () => {
            expect(wrapper.find(Input).props().value).toBe(2)
        })
        it('calls the handler when the Input onChange event is triggered', () => {
            wrapper.find(Input).simulate('change', 3)
            expect(handleNumberOfPlayers).toHaveBeenCalledWith(3)
        })
        it('calls the handler when the Button onClick event is triggered', () => {
            wrapper.find(Button).simulate('click')
            expect(handleOnSubmit).toHaveBeenCalled()
        })
        it('does not render any error message', () => {
            expect(wrapper.find(ErrorText)).toHaveLength(0)
        })
    })
    describe('when the result array is empty (errors)', () => {
        beforeEach( () => {
            wrapper = renderComponent(
                {
                    numberOfPlayers: {value: 1, error: true, errorText: 'Error text'},
                    deck: 'people',
                    onSubmitError: true,
                    sortedResult: [],
                    activeDeckPower: 'height'
                })
        })

        it('renders the Input error message', () => {
            expect(wrapper.find(ErrorText).at(0).contains('Error text')).toBe(true)
        })
        it('renders the Button error message', () => {
            expect(wrapper.find(ErrorText).at(1).contains('There was an unexpected error please try again'))
                .toBe(true)
        })
        it('renders the Button disabled', () => {
            expect(wrapper.find(Button).props().disabled).toBe(true)
        })
    })
    describe('when the result array is not empty', () => {
        beforeEach( () => {
            wrapper = renderComponent(
                {
                    numberOfPlayers: {value: 2, error: false, errorText: ''},
                    deck: 'people',
                    onSubmitError: false,
                    sortedResult: [1, 2, 3],
                    activeDeckPower: 'height'
                })
        })
        it('renders the CardsList component', () => {
            expect(wrapper.find(CardsList)).toHaveLength(1)
        })
        it('passes the correct props to the CardsList component', () => {
            expect(wrapper.find(CardsList).props().sortedResult).toEqual([1, 2, 3])
            expect(wrapper.find(CardsList).props().activeDeckPower).toEqual('height')
        })
    })
})

