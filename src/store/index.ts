import { create } from "zustand";

interface GameQuery {
    selectedGenreId?: number;
    selectedPlatformId?:number,
    sortOrder?: string,
    searchText?:string
  }
  
interface GameQueryStore {
    gameQuery: GameQuery,
    setSearchText: (searcText:string) => void,
    setGenreId: (genreId: number) => void,
    setPlatformId: (platformId: number) => void,
    setOrder: (sortOrder: string) => void
}

const useGameQuery = create<GameQueryStore>((set) => ({
    gameQuery: {} as GameQuery,
    
    setGenreId: (selectedGenreId: number) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, selectedGenreId } })),

    setOrder: (orderby: string) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, orderby } })),
    
    setPlatformId: (id: number) =>
        set((store) => ({ gameQuery: ({ ...store.gameQuery, selectedPlatformId: id }) })),
    
    setSearchText: (searchText: string) =>
        set(() => ({ gameQuery: ({ searchText }) }))
}))

export default useGameQuery;