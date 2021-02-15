import { gql } from '@apollo/client'

export const getTotalStarshipsPeopleQuery = () => gql`{
    allStarships {
        totalCount
    }
    allPeople {
        totalCount
    }
}`
