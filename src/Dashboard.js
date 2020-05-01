import React, { Component } from 'react';
import MovieCard from "./MovieCard";

class Dashboard extends Component {
     profiles = this.props.profiles;
		users = this.props.users;
		movies = this.props.movies;
  	render() {
    this.usersByMovie = {}

	this.profiles.map(profile =>{
      	const movieId = profile.favoriteMovieID
    	if(this.usersByMovie[movieId]){
        this.usersByMovie[movieId].push(profile.userID);
        }
      else{
      this.usersByMovie[movieId] = [profile.userID];
      }
      return this.usersByMovie
    });

	const movieCards = Object.keys(this.movies).map(id => (
      <MovieCard
        key={id}
        users={this.users}
        usersWhoLikedMovie={this.usersByMovie[id]}
        movieInfo={this.movies[id]}
      />
    ));

	console.log(this.usersByMovie);
    return (
      <div className="Dashboard">
      {movieCards}
      </div>
    );
}
}

export default Dashboard;