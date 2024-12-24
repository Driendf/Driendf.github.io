//<![CDATA[
const galleryContainer = document.getElementById("gallery-container");
const paginationContainer = document.getElementById("pagination");
const searchBar = document.getElementById("search-bar");
const filterDobladoButton = document.getElementById("filter-doblado");

let currentPage = 1;
let filterDoblado = false;
let searchTerm = "";
const itemsPerPage = 9;

// Lista inicial de películas
let movies = [
  {
    title: "Lanza Fénix (Doblado)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBAldafMrwOy270ATiLklmGmsfUXyw-QEBEasoeQxekVOmBz_024-FttA7hjpea4CrW2Ys63Lt9TFGrXKOfzjuxRUihYGPNUigSRtUil1lfS3ChRjAUWc3mW7A5X-q0hn6mQTNNXowf4Py5GCtmvKGQOTimnhoqxEvnPaS0ntiNGoseprwLqItJfiOR_w/s2200/000.jpg",
    doblado: true,
    link: "https://www.dramabreeze.site/2024/12/ecos-del-mar-rojo.html"
  },
  {
    title: "Lanza Fénix (Subtitulada)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBAldafMrwOy270ATiLklmGmsfUXyw-QEBEasoeQxekVOmBz_024-FttA7hjpea4CrW2Ys63Lt9TFGrXKOfzjuxRUihYGPNUigSRtUil1lfS3ChRjAUWc3mW7A5X-q0hn6mQTNNXowf4Py5GCtmvKGQOTimnhoqxEvnPaS0ntiNGoseprwLqItJfiOR_w/s2200/000.jpg",
    doblado: false,
    link: "https://www.dramabreeze.site/2024/12/ecos-del-mar-rojo.html"
  },
];

// Películas adicionales que se mezclarán
const additionalMovies = [
  {
    title: "Nuevo título 1",
    image: "https://via.placeholder.com/150x225",
    doblado: true,
    link: "https://www.dramabreeze.site/2024/12/nuevo-titulo-1.html"
  },
  {
    title: "Nuevo título 2",
    image: "https://via.placeholder.com/150x225",
    doblado: false,
    link: "https://www.dramabreeze.site/2024/12/nuevo-titulo-2.html"
  },
  // Agrega más elementos aquí
];

// Mezclar con la lista existente
movies = movies.concat(additionalMovies);

// Función para renderizar la galería
function renderGallery() {
  galleryContainer.innerHTML = "";

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDoblado = !filterDoblado || movie.doblado;
    return matchesSearch && matchesDoblado;
  });

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = filteredMovies.slice(start, end);

  currentItems.forEach(movie => {
    const item = document.createElement("div");
    item.className = "gallery-item";

    item.innerHTML = `
      <a href="${movie.link}">
        <img src="${movie.image}" alt="${movie.title}" />
      </a>
      <p class="title">${movie.title}</p>
      <p class="info">${movie.doblado ? "Doblado" : "Subtítulos"}</p>
    `;
    galleryContainer.appendChild(item);
  });
}

// Función para renderizar la paginación
function renderPagination() {
  paginationContainer.innerHTML = "";
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDoblado = !filterDoblado || movie.doblado;
    return matchesSearch && matchesDoblado;
  });
  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);

  const range = 3;
  const startPage = Math.max(1, currentPage - range);
  const endPage = Math.min(totalPages, currentPage + range);

  if (currentPage > 1) {
    const firstButton = document.createElement("button");
    firstButton.textContent = "1";
    firstButton.addEventListener("click", () => {
      currentPage = 1;
      renderGallery();
      renderPagination();
    });
    paginationContainer.appendChild(firstButton);

    const dots = document.createElement("button");
    dots.textContent = "...";
    dots.disabled = true;
    paginationContainer.appendChild(dots);
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    if (i === currentPage) {
      pageButton.classList.add("active");
    } else {
      pageButton.addEventListener("click", () => {
        currentPage = i;
        renderGallery();
        renderPagination();
      });
    }
    paginationContainer.appendChild(pageButton);
  }

  if (currentPage < totalPages) {
    const dots = document.createElement("button");
    dots.textContent = "...";
    dots.disabled = true;
    paginationContainer.appendChild(dots);

    const lastButton = document.createElement("button");
    lastButton.textContent = totalPages;
    lastButton.addEventListener("click", () => {
      currentPage = totalPages;
      renderGallery();
      renderPagination();
    });
    paginationContainer.appendChild(lastButton);
  }
}

// Inicialización
searchBar.addEventListener("input", () => {
  searchTerm = searchBar.value;
  currentPage = 1;
  renderGallery();
  renderPagination();
});

filterDobladoButton.addEventListener("click", () => {
  filterDoblado = !filterDoblado;
  filterDobladoButton.style.backgroundColor = filterDoblado ? "#ff4d4d" : "#1c1c1c";
  currentPage = 1;
  renderGallery();
  renderPagination();
});

renderGallery();
renderPagination();
//]]>
