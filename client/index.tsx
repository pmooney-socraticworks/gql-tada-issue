import { useQuery } from '@apollo/client'
import { graphql, readFragment } from './graphql'

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

const Todo = () => {
    const { data } = useQuery(todoQuery, { variables: { id: '1' }})
    if (!data?.todo) return null

    const todo = readFragment(todoFragment, data.todo)

    return (
       null 
    )
}
