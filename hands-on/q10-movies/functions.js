let listMovies = async () => {
  let response = await axios.get(baseurl + 'movies');
  let moviesListing = response.data;
  moviesListing.reverse();
  for (let m of moviesListing) {
    let html = `
            <div class="row m-3">
                <div class="column border border-success p-3 text-primary rounded-left">
                ${m.title}
                </div>
                <div class="column border border-success p-3 rounded-right">
                ${m.plot}
                </div>
            </div>
            `;
    document.querySelector('#movielisting').innerHTML += html;
  }
};

let submitMovies = async () => {
  let movieTitle = document.querySelector('#movietitle').value;
  let moviePlot = document.querySelector('#movieplot').value;
  let payLoad = {
    title: movieTitle,
    plot: moviePlot,
  };
  let response = await axios.post(baseurl + 'movie/create', payLoad);
  // console.log(response);

  listMovies();
};
