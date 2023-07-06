// Select HTML elements
const newNoteButton = document.getElementById("new-note");
const content = document.querySelector(".content");

// Load saved notes from localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Event listener for "new-note" button click
newNoteButton.addEventListener("click", addNewNote);

// Function to add a new note
function addNewNote() {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <input type="text" class="title-note" placeholder="Título">
    <textarea class="content-note" placeholder="Nota" oninput="adjustHeight(this)"></textarea>
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

  // Add click event to delete the note
  const deleteButton = note.querySelector(".delete-note");
  deleteButton.addEventListener("click", deleteNote);

  // Add the new note to the "content" div
  content.appendChild(note);
}

// Function to delete a note
function deleteNote(event) {
  const note = event.target.closest(".note");
  const noteIndex = Array.from(content.children).indexOf(note);
  notes.splice(noteIndex, 1); // Remove the note from the array

  // Remove the note from localStorage
  const noteKey = `note_${noteIndex}`;
  localStorage.removeItem(noteKey);

  note.remove();
  saveNotes(); // Save the updated notes to localStorage
}

// Function to save notes to localStorage
function saveNotes() {
  const notesData = [];

  const notesElements = document.querySelectorAll(".note");
  notesElements.forEach((noteElement, index) => {
    const title = noteElement.querySelector(".title-note").value;
    const content = noteElement.querySelector(".content-note").value;
    const noteKey = `note_${index}`; // Unique key for each note
    notesData.push({ title, content });
    localStorage.setItem(noteKey, JSON.stringify({ title, content }));
  });

  localStorage.setItem("notes", JSON.stringify(notesData));
}

// Load saved notes from localStorage
function loadNotes() {
  content.innerHTML = "";

  notes.forEach((noteData) => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
      <input type="text" class="title-note" placeholder="Título" value="${noteData.title}">
      <textarea class="content-note" placeholder="Nota" oninput="adjustHeight(this)">${noteData.content}</textarea>
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

    // Add click event to delete the note
    const deleteButton = note.querySelector(".delete-note");
    deleteButton.addEventListener("click", deleteNote);

    // Add the note to the "content" div
    content.appendChild(note);
  });
}

// Add input event to save notes when there are changes
content.addEventListener("input", saveNotes);

// Load notes when the page loads
loadNotes();