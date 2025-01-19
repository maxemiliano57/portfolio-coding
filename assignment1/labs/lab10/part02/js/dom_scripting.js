// Snake Story Javascript

cancelButton.addEventListener('click', function (event) {
    event.preventDefault();

    var commentInputArea = document.getElementById('commentInput');

    commentInputArea.value = '';
});

postButton.addEventListener('click', function () {
    var comment = commentInput.value;

    if (comment.trim()) {
        var commentsList = document.getElementById('commentsList');

        var newComment = document.createElement('p');
        newComment.textContent = comment;

        commentsList.appendChild(newComment);

        commentInput.value = '';
    }
    else {
        alert("Please enter a comment before posting.");
    }
});
