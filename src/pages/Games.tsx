
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import GameHeading from '../components/GameHeading'


function Games() {
  
  return (
    <Grid
      paddingX={'12px'}
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <Show above='lg'>
        <GridItem area="aside">
          <GenreList/>
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameHeading />
        <HStack>
          <PlatformSelector/>
          <SortSelector/>
        </HStack>
        <GameGrid/>
      </GridItem>
    </Grid>
  )
}

export default Games
