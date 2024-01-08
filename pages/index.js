import useSWR from 'swr'
import axios from 'axios'

const fetcher = query => axios.post('https://rickandmortyapi.com/graphql', {query}).then(res => res.data)
 
const QUERY=`
query {
    characters(page:3){
      info{
        count
        pages
          prev
          next
      }
      results{
        id
        name
      }    
    }
  }
  
`

const Index = () => {
    const { data } = useSWR(QUERY, fetcher)
    return (
        <>
            <h1>UUID</h1>
            <prev>{JSON.stringify(data, null, 2)}</prev>
        </>
    )
}
export default Index