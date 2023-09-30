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