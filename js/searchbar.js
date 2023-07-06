// Searchbar
const iconClearSearch =  document.getElementById("icon-clear-search");
const iconSearch = document.getElementById("icon-search");
const inputSearch = document.getElementById("input-search");
const searchbar = document.getElementById("searchbar");

// Function to clear the input and restore default styles
function inputClear() {
  iconClearSearch.style.display = "none";
  inputSearch.value = "";
}

// Function to update input styles when it's not empty
function inputNotClear() {
  iconClearSearch.style.display = "flex"; 
}

// Add event listener to the inputSearch element for the "input" event
inputSearch.addEventListener("input", function() {
  // Check if the input value is not empty
  if (inputSearch.value.length !== 0) {
    inputNotClear();
  } else {
    inputClear();
  }
});


// Add event listener to the inputSearch element for the "input" event
inputSearch.addEventListener("input", () => {
  // Get the search term from the inputSearch element and convert it to lowercase
  const searchTerm = inputSearch.value.toLowerCase();

  // Clear the content div
  content.innerHTML = "";

  // Iterate over each note in the notes array
  notes.forEach((noteData, index) => {
    // Get the lowercase title of the current note
    const titleNote = noteData.title.toLowerCase();

    // Check if the titleNote includes the searchTerm
    if (titleNote.includes(searchTerm)) {
      // Create a new note element
      const note = document.createElement("div");
      note.classList.add("note");
      note.innerHTML = `
        <input type="text" class="title-note" placeholder="Título" value="${noteData.title}">
        <textarea class="content-note" placeholder="Nota">${noteData.content}</textarea>
        <div class="box-remove-note">
          <svg class="svg-icon delete-note" width="46" height="46" fill="none" stroke="currentColor"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6h18"></path>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <path d="M10 11v6"></path>
            <path d="M14 11v6"></path>
          </svg>
        </div>
      `;

      // Get the deleteButton element inside the note
      const deleteButton = note.querySelector(".delete-note");

      // Add click event listener to the deleteButton
      deleteButton.addEventListener("click", deleteNote);

      // Append the note element to the content div
      content.appendChild(note);
    }
  });
});
