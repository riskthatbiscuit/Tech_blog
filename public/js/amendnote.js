const amendNoteFormHandler = async (e) => {
  e.preventDefault();
  
  const noteId = e.target.id.replace("updateNote", "");
  const updatedTitle = document.querySelector(`#editTitle${noteId}`).value.trim();
  const updatedNote = document.querySelector(`#editNote${noteId}`).value.trim();

  if (updatedTitle && updatedNote) {
    const response = await fetch(`/note/${noteId}`, {
      method: "PUT",
      body: JSON.stringify({ title: updatedTitle, note: updatedNote }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to update the post.");
    }
  }
};

const editNoteFormHandler = (e) => {
  const noteId = e.target.id.replace("editButton", "");
  const editForm = document.querySelector(`#editForm${noteId}`);
  editForm.style.display = "block";

  const originalButton = document.querySelector(`#editButton${noteId}`);
  originalButton.style.display = "none";
};

document.querySelectorAll(".editNote").forEach(button => {
  button.addEventListener("click", editNoteFormHandler);
});

document.querySelectorAll(".updateNote").forEach(button => {
    button.addEventListener("click",amendNoteFormHandler);
})

document.addEventListener("DOMContentLoaded", function () {
  let collapsibleElements = document.querySelectorAll(".collapsible");
  M.Collapsible.init(collapsibleElements, {});
});
