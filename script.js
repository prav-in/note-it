let heading = document.getElementsByClassName("heading")[0];
let notesContainer = document.getElementById("notes-list");
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
    notesText.value ? alert("Enter The Title") : alert("Please Write A Note");
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

    heading.innerText = `Add New Note`;
    submitBtn.innerHTML = ` <i class="fa-solid fa-plus"></i> Add Note`;
    isNew = true;
  } else {
    notesText.value ? alert("Enter The Title") : alert("Please Write A Note");
  }
};

const handleUpdate = (e) => {
  heading.innerText = `Update Note`;
  submitBtn.innerHTML = `<i class="fa-regular fa-circle-check"></i> Update Note`;
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
