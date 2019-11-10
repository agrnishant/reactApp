import React, { Component } from 'react';
import {getMovies, deleteMovie} from '../services/movieService';
import { toast } from "react-toastify";

class Movies extends Component {
    state = { 
        movies: []
    }

    async componentDidMount() {
        const { data: movies } = await getMovies();
        this.setState({ movies });
    }

    handleDelete = async movie => {
        const originalMovies = this.state.movies;
        console.log("Delete", movie);
        const movies = originalMovies.filter(m => m._id !== movie._id);
        this.setState({movies});
        try{
          await deleteMovie(movie._id);
        }
        catch(ex){
            if (ex.response && ex.response.status === 404) console.log("x");
            toast.error("This movie has already been deleted.");
            this.setState({ movies: originalMovies });
        }
      };
      
    render() {
        const {length: count} = this.state.movies;
        if(count === 0)
            return <p>There are no Movies in DB!!!</p>
        return (
            <React.Fragment>
            <p>Showing {count} Movies in DB!!!</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {this.state.movies.map(movie => (
                    <tr key={movie._id}>
                        <td> {movie.title} </td>
                        <td> {movie.genre.name} </td>
                        <td> {movie.numberInStock} </td>
                        <td> {movie.dailyRentalRate} </td>
                        <td> <button onClick= { ()=> this.handleDelete(movie) } 
                        className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                )) }
                </tbody>
            </table>
            </React.Fragment>
        );
    }
}
export default Movies;
