
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'

export interface GameQuery {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null
}

function App() {
  const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery);
  
  return (
    <Grid
      paddingX={'12px'}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <Navbar/>
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside">
          <GenreList
            onSelectGenre={(selectedGenre) => setGameQuery({ ...gameQuery, selectedGenre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={gameQuery.selectedPlatform}
          selectPlatform={(selectedPlatform) => setGameQuery({...gameQuery,selectedPlatform})}
        />
        <GameGrid
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  )
}

export default App
