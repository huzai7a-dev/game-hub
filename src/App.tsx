
import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav">
        <Navbar/>
      </GridItem>
      <Show above='lg'>
        <GridItem bg="blue" area="aside">
            aside
        </GridItem>
      </Show>

      <GridItem bg="green" area="main">
        Main
      </GridItem>
    </Grid>
  )
}

export default App
