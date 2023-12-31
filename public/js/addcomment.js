const addCommentFormHandler = async (e) => {
  e.preventDefault();

  console.log("Save comment was pressed!");

  const comment = document.querySelector("#comment").value;

  const noteId = window.location.pathname.split("/").pop();
  const response = await fetch(`/note/${noteId}`, {
    method: "POST",
    body: JSON.stringify({
      comment,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to add a comment job.");
  }
};

document
  .querySelector("#submitComment")
  .addEventListener("click", addCommentFormHandler);
