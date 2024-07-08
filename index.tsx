import { useQuery } from '@apollo/client'
import { graphql } from './graphql'

const todoFragment = graphql(`
     fragment TodoFragment on Todo {
        id
        archived
        description
    }
`)

const todoQuery = graphql(`
    query todo($id: String!) {
        todo(id: $id)  {
           ...TodoFragment 
        }
    }
`, [todoFragment])

const App = () => {
    const { data } = useQuery(todoQuery, { variables: { id: '1'}})

    return (
       null 
    )
}