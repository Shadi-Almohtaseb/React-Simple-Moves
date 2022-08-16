import './App.css';
import SearchIcon from './Search.svg';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=e9ae89b5';
// const movie1 = {
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
//   "Title": "Italian Spiderman",
//   "Type": "movie",
//   "Year": "2007",
//   "imdbID": "tt2705436",
// }

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchterm] = useState('');


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search)
  };

  useEffect(() => {
    searchMovies('fast');
  }, []);
  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder='Search for Movies' value={searchTerm} onChange={(e) => setSearchterm(e.target.value)}></input>
        <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchTerm)} />

      </div>

      {
        movies?.length > 0
          ? (
            <div className='container'>
              {movies.map((movie) => (<MovieCard movie={movie} />))}

            </div>
          ) : (
            <div className='empty'>
              <h2>No Movies Found! :(</h2>
            </div>
          )
      }

    </div>
  )

}

export default App;