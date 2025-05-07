import { gql, useQuery } from "@apollo/client"
import Header from "./component/Layout/Header";
import { useTranslation } from "react-i18next";

const QUERY = gql`
  query {
    authors {
      name
    }
  }
`

function App() {
  const { t } = useTranslation();
  const { data } = useQuery(QUERY)


console.log(data)
  return (
    <>
      <Header/>
     
 
</>

  )
}

export default App
