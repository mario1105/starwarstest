import { gql } from '@apollo/client'

export const getPeopleQuery = ({last, first}) => gql`{
    allPeople(last:${last}, first:${first}) {
        people{
            id
            name
            height
            birthYear
            mass
        }
    }
}`

