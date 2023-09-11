import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Call server to get the genres
// const useGenres = () => useData<Genre>('/genres')
const useGenres = () => ({data: genres, isLoading: false, error: null})

export default useGenres 