const apiKey = "380fff63";
const searchBtn = document.getElementById("searchBtn");
const movieInput = document.getElementById("movieInput");
const movieDetails = document.getElementById("movieDetails");

searchBtn.addEventListener("click", () => {
  const title = movieInput.value.trim();
  if (title === "") {
    alert("Type The Movie Name");
    return;
  }
  fetchMovie(title);
});

function fetchMovie(title) {
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
    title
  )}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "False") {
        showError("Movie Not Found");
      } else {
        showMovie(data);
      }
    })
    .catch((err) => {
      showError("Movie Not Found");
      console.error(err);
    });
}
function showMovie(data) {
  movieDetails.style.display = "block";
  movieDetails.innerHTML = `
    <img src="${
      data.Poster !== "N/A" ? data.Poster : "placeholder.jpg"
    }" alt="${data.Title}">
    <div class="info">
      <h2>${data.Title} (${data.Year})</h2>
      <p><strong>Category:</strong> ${data.Genre}</p>
      <p><strong>Rating:</strong> ${data.imdbRating}</p>
      <p><strong>Story:</strong> ${data.Plot}</p>
    </div>
  `;
}
function showError(msg) {
  movieDetails.style.display = "none";
  movieDetails.innerHTML = "";
  const errorEl = document.createElement("div");
  errorEl.className = "error";
  errorEl.textContent = msg;
  document.querySelector(".result-area").appendChild(errorEl);
}
