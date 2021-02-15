import React from 'react'
import { TableRow } from "components"

const HistoryListItem = ({ typeName, player, gameNumber, name, power }) => {
    return(
        <tr>
            <TableRow>{gameNumber}</TableRow>
            <TableRow>{player}</TableRow>
            <TableRow>{typeName}</TableRow>
            <TableRow>{name}</TableRow>
            <TableRow>{power}</TableRow>
        </tr>
    )
}

export default HistoryListItem
