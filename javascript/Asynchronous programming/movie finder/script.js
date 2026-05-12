//http://www.omdbapi.com/?apikey=4bd42299&s=mummy
document.addEventListener("DOMContentLoaded", () => {
  const movieForm = document.getElementById("movieForm");
  const movieResults = document.getElementById("movieResults");
  movieForm.addEventListener("submit", (e) => {
    const movieName = document.getElementById("movieInput").value;
    //prevent the browser default
    e.preventDefault();
    fetchMovies(movieName);
  });
  async function fetchMovies(movieName) {
    try {
      movieResults.innerHTML =
        '<div class="loading">Searching Movies.......<div>';
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=4bd42299&s=${movieName}`
      );
      const movieData = await response.json();
      if (movieData.Response === "False") {
        throw new Error("No movies found");
      }
      displayMovies(movieData.Search);
    } catch (error) {
      movieResults.innerHTML = `<div class="error-message">
        ${error.message || "Error searching movies. Please try again."}</div>`;
    }
  }

  function displayMovies(movies) {
    movieResults.innerHTML = `<div class='movies-grid'>
    ${movies
      .map(
        (movie) => `<div class="movie-card">
        <img
         src= "${
           movie.Poster !== "N/A"
             ? movie.Poster
             : "https://via.placeholder.com/300x450?text=No+Poster"
         }"
           alt ="${movie.Title}"
           class='movie-poster'/>  
     <div class='movie-info'>
     <h3 class='movie-title'>${movie.Title}</h3>
     <div class="movie-year">${movie.Year}</div>
     </div>
     </div>`
      )
      .join("")}
    </div>`;
  }
});
