/* ESTRELLA */

$(':radio').change(function() {
    console.log('New star rating: ' + this.value);
  });

/* buscador */

const search__floater = document.getElementById('search__floater');
const searchInput = document.getElementById('searchInput');
const buscador_viaje = document.querySelectorAll('buscador_viaje');

document.getElementById('event-search-form').addEventListener('submit'), function (e) {
    e.preventDefault(); }
    const searchTerm = searchInput.value.toLowerCase().trim();
    buscador_viaje.forEach(body => {
        const abuscador_viajeContent = buscador_viaje.textContent.toLowerCase();
        if (buscador_viajeContent.includes(searchTerm)) {
            buscador_viaje.style.display = 'block';
        } else {
            buscador_viaje.style.display = 'none';
        }
    });


/* comentarios*/

function toggleSearch() {
    console.log('Search button clicked');
}

document.addEventListener("DOMContentLoaded", () => {
    const commentBox = document.getElementById("comment-box");
    const submitButton = document.getElementById("submit-button");
    const commentList = document.getElementById("comment-list");

    submitButton.addEventListener("click", () => {
        const commentText = commentBox.value.trim();

        if (commentText !== "") {
            const commentElement = document.createElement("div");
            commentElement.className = "comment";
            commentElement.textContent = commentText;

            commentList.appendChild(commentElement);
            commentBox.value = ""; 
        }
    });
});

