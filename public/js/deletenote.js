const deleteNoteFormHandler = async (e) => {
  e.preventDefault();

  const noteId = window.location.pathname.split("/").pop();
  const response = await fetch(`/note/${noteId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const responseData = await response.json(); 

    if (responseData.redirect) {
      window.location.href = responseData.redirect;
    } else {
      document.location.reload();
    }
  } else {
    alert("Failed to delete a note. Check that you were the user to create");
  }
};

document
  .querySelector("#deleteNote")
  .addEventListener("click", deleteNoteFormHandler);

document.addEventListener("DOMContentLoaded", function () {
  let collapsibleElements = document.querySelectorAll(".collapsible");
  M.Collapsible.init(collapsibleElements, {});
});
