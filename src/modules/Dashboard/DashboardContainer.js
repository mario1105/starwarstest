import React from 'react'
import { useQuery } from '@apollo/client'
import Dashboard from './Dashboard'
import { getTotalStarshipsPeopleQuery } from 'graphql/queries/totalStarshipsPeople'

const DashboardContainer = () => {
    const { data, error } = useQuery(getTotalStarshipsPeopleQuery())

    const peopleTotalCount = error ? '(number of cards not available)' : data?.allPeople?.totalCount
    const starshipsTotalCount = error ? '(number of cards not available)' : data?.allStarships?.totalCount

    return (<Dashboard peopleTotalCount={peopleTotalCount} starshipsTotalCount={starshipsTotalCount}  />)

}

export default DashboardContainer
