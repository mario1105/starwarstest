import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import './App.css'
import { ApolloProvider } from '@apollo/client'
import client from "graphql/client"
import DashboardPage from "pages/DashboardPage"
import HistoryPage from "pages/HistoryPage"
import { GameProvider } from "modules/Dashboard/Game/GameContext"

const App = () => {

    return (
        <ApolloProvider client={client}>
            <div className="App">
                <GameProvider>
                    <Router>
                        <Switch>
                            <Route
                                path="/dashboard"
                                exact
                                component={DashboardPage}
                            />
                            <Route
                                path="/history"
                                exact
                                component={HistoryPage}
                            />
                            <Route
                                component={() => <Redirect to={{ pathname: '/dashboard'}} />}
                            />
                        </Switch>
                    </Router>
                </GameProvider>
            </div>
        </ApolloProvider>
    )
}

export default App
