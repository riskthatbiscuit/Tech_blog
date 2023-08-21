const addNoteFormHandler = async (e) => {
  e.preventDefault();

  const title = document.querySelector('#newTitle').value.trim();
  const note = document.querySelector("#newNote").value.trim();


  if (title && note){
    console.log("we made it this far!")
    const response = await fetch(`/note`, {
      method: "POST",
      body: JSON.stringify({ title, note }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to add a note job.");
    }
  }
};

document
  .querySelector("#submitNote")
  .addEventListener("click", addNoteFormHandler);
