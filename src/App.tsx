
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

export interface GameQuery {
  selectedGenreId?: number;
  selectedPlatformId?:number,
  sortOrder: string,
  searchtext:string
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
        <Navbar onSearch={(searchtext) => setGameQuery({ ...gameQuery, searchtext })} />
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside">
          <GenreList
            onSelectGenre={(selectedGenreId) => setGameQuery({ ...gameQuery, selectedGenreId })}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack>
          <PlatformSelector
            selectedPlatformId={gameQuery.selectedPlatformId}
            selectPlatform={(selectedPlatformId) =>
              setGameQuery({ ...gameQuery, selectedPlatformId })}
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(selectedOrder) =>
              setGameQuery({ ...gameQuery, sortOrder: selectedOrder })}
          />
        </HStack>
        <GameGrid
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  )
}

export default App
