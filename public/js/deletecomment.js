const deleteCommentFormHandler = async (e) => {
  e.preventDefault();

  console.log("Delete comment was pressed!");

  const commentId = window.location.pathname.split("/").pop();
  const response = await fetch(`/comment/${commentId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to delete a comment.");
  }
};

document
  .querySelector("#deleteComment")
  .addEventListener("click", addCommentFormHandler);

document.addEventListener("DOMContentLoaded", function () {
  let collapsibleElements = document.querySelectorAll(".collapsible");
  M.Collapsible.init(collapsibleElements, {});

});