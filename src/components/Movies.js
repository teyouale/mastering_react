import React, { Component } from "react";
import Like from "../components/Like";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    likeStatus: false
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handleLike = () => {
    this.setState({ likeStatus: "true" });
  };

  render() {
    if (this.state.movies.length !== 0)
      return (
        <div className='container'>
          <p style={{ margin: 10 }}>
            Showing {this.state.movies.length} in the database
          </p>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Title</th>
                <th scope='col'>Genre</th>
                <th scope='col'>Stock</th>
                <th scope='col'>Rate</th>
                <th scope='col' />
                <th scope='col' />
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      handleLike={this.handleLike}
                      likeStatus={this.state.likeStatus}
                    />
                  </td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={() => this.handleDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    else
      return (
        <h2 className='container' style={{ margin: 10, textAlign: "center" }}>
          No Movies Database
        </h2>
      );
  }
}

export default Movies;
