let baseurl = 'https://ckx-movies-api.herokuapp.com/';

document.querySelector('#loadmovies-btn').addEventListener('click', () => {
  listMovies();
});

document.querySelector('#submit-btn').addEventListener('click', () => {
  submitMovies();
});
