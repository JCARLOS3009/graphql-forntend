# graphql-frontend
Rick and Morty API com GraphQL e React
Este projeto é um exemplo de como integrar a API do Rick and Morty com o GraphQL e React. O projeto utiliza o pacote swr para buscar dados e o axios para fazer requisições HTTP.

Instalação de pacotes
Antes de começar, instale os pacotes necessários usando o comando:

bash
Copy code
npm install swr axios
Utilização do GraphQL
O GraphQL é utilizado para fazer consultas à API do Rick and Morty. A consulta é definida na variável QUERY. A função fetcher é responsável por fazer a requisição HTTP e retornar os dados.

javascript
Copy code
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
Renderização dos dados
A função useSWR é usada para buscar os dados. A variável data armazena os dados obtidos pela consulta.

javascript
Copy code
const { data } = useSWR(QUERY, fetcher)
Os dados são renderizados no componente Index:
