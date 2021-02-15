import React from 'react'
import { Container, Panel, MainHeader, SubHeader } from 'components'
import Description from "./Description"
import Game from "./Game"


const Dashboard = ({ peopleTotalCount, starshipsTotalCount }) => {
    return (
        <Container>
            <MainHeader>
                Star Wars Top Trumps
            </MainHeader>
            <Panel>
                <SubHeader>Welcome to Star Wars Top Trumps cards game!</SubHeader>
                <Description peopleTotalCount={peopleTotalCount} starshipsTotalCount={starshipsTotalCount}/>
            </Panel>
            <Game peopleTotalCount={peopleTotalCount} starshipsTotalCount={starshipsTotalCount} />
        </Container>
    )
}

export default Dashboard
