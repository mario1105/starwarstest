import React, {memo} from 'react'
import CardsList from "./CardsList"
import { Panel, SubHeader, Select, Input, Button, ErrorText } from 'components'


const Game = ({ numberOfPlayers, deck, onSubmitError, sortedResult, activeDeckPower, handleNumberOfPlayers, handleDeck, handleOnSubmit}) => {
    return (
        <>
            <Panel>
                <SubHeader>Game</SubHeader>
                <form form={handleOnSubmit}>
                    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <div>
                            Select a deck:
                            <Select
                                onChange={handleDeck}
                                value={deck}>
                                <option value="people">People</option>
                                <option value="starships">Starships</option>
                            </Select>
                        </div>
                        <div>
                            Introduce number of players:
                            <Input
                                type="number"
                                value={numberOfPlayers.value}
                                onChange={handleNumberOfPlayers} />
                            {numberOfPlayers.error &&
                            <ErrorText data-test-id={'game-input-players-error'}>{numberOfPlayers.errorText}</ErrorText>}
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Button
                                disabled={numberOfPlayers.error}
                                onClick={handleOnSubmit}>Play</Button>
                            {onSubmitError &&
                            <ErrorText data-test-id={'game-submit-button-error'}>There was an unexpected error please try again</ErrorText>}
                        </div>
                    </div>
                </form>
            </Panel>
            {!!sortedResult?.length && <CardsList sortedResult={sortedResult} activeDeckPower={activeDeckPower}/>}
        </>
    )
}

export default memo(Game)
