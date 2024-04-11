import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=951da4d0';
// const movie1 = {
//     "Title": "Titanic: The Legend Goes On...",
//     "Year": "2000",
//     "imdbID": "tt0330994",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5MjcxODAwMV5BMl5BanBnXkFtZTcwMTk4OTMwMg@@._V1_SX300.jpg"
// }
const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect (() => {
        searchMovies('tit');
    }, [])

    return (
        <div className='app'>
            <h1>Movie Land</h1>
            <div className='search'>
                <input 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    type="text" 
                    placeholder='Search for movies'/>
                    <img 
                        src={SearchIcon} 
                        alt="search" 
                        onClick={() => searchMovies(searchTerm)}
                        />
            </div>

        {
            movies?.length > 0
            ? (<div className='container'>
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
                
            </div>
            ) : (
            <div className='empty'>
            <h2>No movies found</h2>
            </div>
        )
        }

        

        </div>
    );
}

export default App;