import useGenres from '../hooks/useGenres'

const GenreList = () => {
  const {data} = useGenres()

  return (
    <ul>
      {data.map(res => <li key={res.id}>{res.name}</li>)}
    </ul>
  )
}

export default GenreList