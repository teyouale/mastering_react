import React, { Component } from 'react';
import Like from './Like';
import Pagination from './Pagination';
import { getMovies } from '../services/fakeMovieService';
import { paginate } from '../utils/paginate';

class Movies extends Component {
	state = {
		movies: getMovies(),
		currentPage: 1,
		pageSize: 4,
	};

	handleDelete = movie => {
		const movies = this.state.movies.filter(m => m._id !== movie._id);
		this.setState({ movies: movies });
	};
	handleLike = movie => {
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		movies[index] = { ...movies[index] };
		movies[index].liked = !movies[index].liked;
		this.setState({ movies });
	};

	handlePagination = num => {
		this.setState({ currentPage: num });
	};

	render() {
		const { movies: allMovies, currentPage, pageSize } = this.state;
		const { length: count } = this.state.movies;
		const movies = paginate(allMovies, currentPage, pageSize);

		if (count !== 0)
			return (
				<div className="container">
					<p style={{ margin: 10 }}>Showing {count} in the database</p>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Title</th>
								<th scope="col">Genre</th>
								<th scope="col">Stock</th>
								<th scope="col">Rate</th>
								<th scope="col" />
								<th scope="col" />
							</tr>
						</thead>
						<tbody>
							{movies.map(movie => (
								<tr key={movie._id}>
									<td>{movie.title}</td>
									<td>{movie.genre.name}</td>
									<td>{movie.numberInStock}</td>
									<td>{movie.dailyRentalRate}</td>
									<td>
										<Like
											likeStatus={movie.liked}
											onClick={() => this.handleLike(movie)}
										/>
									</td>
									<td>
										<button
											className="btn btn-danger"
											onClick={() => this.handleDelete(movie)}>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<Pagination
						pageSize={pageSize}
						itemCount={count}
						currentPage={currentPage}
						handlePagination={this.handlePagination}
					/>
				</div>
			);
		else
			return (
				<h2 className="container" style={{ margin: 10, textAlign: 'center' }}>
					No Movies Database
				</h2>
			);
	}
}

export default Movies;
