let notesContainer = document.getElementById("notes-list");
let notesForm = document.getElementById("notes-form");
let notesTitle = document.getElementById("title");
let notesText = document.getElementById("note");
let submitBtn = document.getElementsByClassName("new-note__btn")[0];

const imgURL = "images/favicon.jpg";
let ind = 0;
let isNew = true;
let notesArray = [];

const handleSubmit = (e) => {
  e.preventDefault();

  isNew ? addNewNote() : updateNote();
};

const addNewNote = () => {
  if (notesTitle.value && notesText.value) {
    notesArray.push({
      title: notesTitle.value,
      note: notesText.value,
    });

    notesTitle.value = "";
    notesText.value = "";

    renderList();
  } else {
    alert("input required");
  }
};

const updateNote = () => {
  if (notesTitle.value && notesText.value) {
    notesArray[ind] = {
      title: notesTitle.value,
      note: notesText.value,
    };

    notesTitle.value = "";
    notesText.value = "";
    renderList();
    submitBtn.innerHTML = "+ Add Note";
    isNew = true;
  } else {
    alert("input required");
  }
};

const handleUpdate = (e) => {
  submitBtn.innerHTML = "Update";
  isNew = false;
  ind = Number(e.target.getAttribute("data-key"));
  notesTitle.value = notesArray[ind].title;
  notesText.value = notesArray[ind].note;
};

const renderList = () => {
  notesContainer.innerHTML = notesArray
    .map((note, index) => {
      return `<div class="note">
  <div 
      onclick="handleUpdate(event)" 
      class="note__edit"> 
      <i  data-key="${index}" class="fa-solid fa-pen-to-square"></i>   
   </div>
    <h2>${note.title}</h2>
    <p>${note.note} </p>
      </div>`;
    })
    .join("");
};
