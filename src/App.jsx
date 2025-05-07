import { gql, useQuery } from "@apollo/client"
import Header from "./component/Layout/Header";

const QUERY = gql`
  query {
    authors {
      name
    }
  }
`

function App() {
  const { data } = useQuery(QUERY)
  console.log(data)

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/background.png')" }}>
      <Header/>
     
 
</div>

  )
}

export default App

