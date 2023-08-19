const main = document.querySelector("#main");
const btn = document.querySelector("#addBtn");
const popup = document.querySelector(".popup");
const popup_d = document.querySelector(".popup-d")
const info = document.querySelector(".info");
let bflag = 0
let iflag = 0
function saveNotes() {
  const notes = document.querySelectorAll(".col-lg-4 .textarea");
  const data = [];
  notes.forEach((note) => {
    data.push({
      text: note.value,
      color: note.style.color,
      backgroundColor: note.style.backgroundColor
    });
  });

  localStorage.setItem("notes", JSON.stringify(data));
}

const note = function note(
  text = "",
  color = "",
  backgroundColor = ""
) {
  


  const note = document.createElement("div");
  note.classList.add("col-lg-4");
  note.innerHTML = `
  <div class="tools">
  <div class="color">
  <i class="fi fi-ss-circle white"></i>
  <i class="fi fi-ss-circle pink"></i>
  <i class="fi fi-ss-circle blue"></i>
  <i class="fi fi-ss-circle yellow"></i>
  <i class="fi fi-ss-circle green"></i>
  <i class="fi fi-ss-circle red"></i>
  </div>
  <div class="util">
  <i class="fi fi-ss-check-circle"></i>
      <i class="fi fi-sr-cross-circle"></i>
  </div>
</div>
<div class="text">
  <div class="para">
    <textarea class="textarea"placeholder="Write your thoughts.." id="" cols="30" rows="10">${text}</textarea>
  </div>
</div>`;
  
  note.querySelector(".fi-sr-cross-circle").addEventListener("click", function () {
    popup_d.style.display = "inline"  
    setTimeout(function () {
        popup_d.style.display = "none";
      }, 1050);
      note.remove();
    saveNotes();
  });
  note.querySelector(".fi-ss-check-circle").addEventListener("click", function () {
    saveNotes();
    popup.style.display = "inline"  
    setTimeout(function () {
        popup.style.display = "none";
      }, 1050);
  });
note.querySelector(".white").addEventListener("click", function () {
    note.querySelector(".textarea").style.color = "black";
    note.querySelector(".textarea").style.backgroundColor = "white"
    saveNotes();
  });
  note.querySelector(".pink").addEventListener("click", function () {
    note.querySelector(".textarea").style.color = "black";
    note.querySelector(".textarea").style.backgroundColor = "#F8C8DC"
    saveNotes();
  });
  note.querySelector(".yellow").addEventListener("click", function () {
    note.querySelector(".textarea").style.color = "black";
    note.querySelector(".textarea").style.backgroundColor = "#FDFD96"
    saveNotes();
  });
  note.querySelector(".blue").addEventListener("click", function () {
    note.querySelector(".textarea").style.color = "white";
    note.querySelector(".textarea").style.backgroundColor = "#779ECB"
    saveNotes();
  });
  note.querySelector(".green").addEventListener("click", function () {
    note.querySelector(".textarea").style.color = "white";
    note.querySelector(".textarea").style.backgroundColor = "#77DD77"
    saveNotes();
  });
  

  note.querySelector(".red").addEventListener("click", function () {
    note.querySelector(".textarea").style.color = "white";
    note.querySelector(".textarea").style.backgroundColor = "#FF6961"
    saveNotes();
  });
  
  note.querySelector(".textarea").style.color = color;
  note.querySelector(".textarea").style.backgroundColor = backgroundColor;
  
  

  
  main.appendChild(note);
  saveNotes();
};

btn.addEventListener("click", function () {
  note();
  info.style.display="none"
  saveNotes()
});

function Main() {
  const lsNotes = JSON.parse(localStorage.getItem("notes")) || [];
  lsNotes.forEach((lsNotes) => {
    note(lsNotes.text, lsNotes.color, lsNotes.backgroundColor);
  });
}

Main();
