document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const nameInput = document.getElementById("name");
    const commentInput = document.getElementById("comment");
    const commentsContainer = document.querySelector(".comments");

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = nameInput.value;
        const comment = commentInput.value;
        const date = new Date().toLocaleString();

        if (name && comment) {
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment");
            commentElement.innerHTML = `
                <strong>${name}</strong> - ${date}<br>
                ${comment}
            `;
            commentsContainer.appendChild(commentElement);

            nameInput.value = "";
            commentInput.value = "";
        }
    });
});
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