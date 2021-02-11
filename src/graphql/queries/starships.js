import { gql } from '@apollo/client';

export const getStarshipsQuery = ({last, first}) => gql`{
    allStarships(last:${last}, first:${first}) {
        starships{
            id
            name
            hyperdriveRating
            length
            crew
            costInCredits
        }
    }
}`

