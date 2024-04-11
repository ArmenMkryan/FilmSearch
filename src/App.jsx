import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import NavBar from './NavBar';
import SearchIcon from './search.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
const API_URL = 'http://www.omdbapi.com?apikey=951da4d0';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        console.log(data.Search)
    }

    const [filteredMovies, setFilteredMovies] = useState([]);
    
    const handleMoviesClick = () => {
        console.log('Movies tuuuuu clicked');
        // Filter movies of type 'movie'
        const filtered = movies.filter(movie => movie.type === 'movie');
        setFilteredMovies(filtered);
    };

    const handleSeriesClick = () => {
        console.log('Series ruuuu clicked');
        // Filter movies not of type 'movie' (i.e., 'series')
        const filtered = movies.filter(movie => movie.type !== 'movie');
        setFilteredMovies(filtered);
    };


    useEffect (() => {
        searchMovies('titanic');
    }, [])
    
    

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            searchMovies(searchTerm);
            
        }
    }
    return (
        <div className='app'>
           
            <h1>Movie Land</h1>
            <div className='search'>
                <input 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    onKeyPress={handleKeyPress}
                    type="text" 
                    placeholder='Search for movies'/>
                    <img 
                        src={SearchIcon} 
                        alt="search" 
                        onClick={() => searchMovies(searchTerm)}
                        />
            </div>
            
            <NavBar onMoviesClick={handleMoviesClick} onSeriesClick={handleSeriesClick} />
            {/* Other components and content */}
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