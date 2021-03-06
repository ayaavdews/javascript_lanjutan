const btnSearch = document.querySelector('.search-button')
btnSearch.addEventListener('click', async function() {
  const keyword = document.querySelector('.input-keyword')
  const movies  = await getMovies(keyword.value)
  updateUI(movies)
})

function getMovies(keyword)  {
  return fetch(`http://www.omdbapi.com/?apikey=e41f0c9b&s=${keyword}`)
            .then(response => response.json())
            .then(response => response.Search)
}

function updateUI(movies) {
  let cards    = ''
  movies.forEach(m => cards += showCards(m))
  document.querySelector('.movie-container').innerHTML = cards
}

// event binding
document.addEventListener('click', async function(e) {
  if(e.target.classList.contains('modal-detail-button')) {
    const movieDetail = await getMovieDetail(e.target.dataset.imdbid)
    updateUIDetail(movieDetail)
  }
})


function getMovieDetail(imdbid) {
  return fetch(`http://www.omdbapi.com/?apikey=e41f0c9b&i=${imdbid}`)
            .then(response => response.json())
            .then(m => m)
}

function updateUIDetail(m) {
  document.querySelector('.modal-body').innerHTML = showMovieDetail(m)
}

function showCards(m) {
  return `
  <div class="col-md-4 my-3">
    <div class="card">
      <img src="${m.Poster}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" data-imdbid="${m.imdbID}" data-bs-toggle="modal" data-bs-target="#MovieDetailModal">Show Details</a>
      </div>
    </div>
  </div>`
}

function showMovieDetail(m) {
  return `
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <img src="${m.Poster}" alt="" class="img-fluid">
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
          <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
          <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
          <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
          <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
        </ul>
      </div>
    </div>
  </div>`
}