var element;
var imageText;
var imageSrc;
var text;

const containers = document.getElementsByClassName("container");

for (const container of containers) {
  container.addEventListener("mouseover", () => {
    element = document.getElementById("section");
    imageText = document.getElementById("pic").alt;
    imageSrc = document.getElementById("pic").src;
    text = document.getElementById(imageText);
    });
}

const sections = document.getElementsByClassName("section");
for(const section of sections){
    section.addEventListener("mouseover", ()=>{
    document.querySelector("section").addEventListener("mouseover", mouseOver);
    document.querySelector("section").addEventListener("mouseout", mouseOut);

    function mouseOver() {
        element.classList.toggle("black");
        text.innerHTML = "<h1>" + imageText + "</h1>";
      }
      
      function mouseOut() {
        element.classList.toggle("black");
        text.innerHTML = null;
      }
    });
}



var modalText = document.getElementById("modalText");

// Get the modal
var modal = document.getElementById("myModal");

// Get the picture that opens the modal
var picModal = document.getElementById("pic");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
picModal.onclick = function () {
  modal.style.display = "block";
  modalText.innerHTML = displayModuleHtml(imageSrc, imageText);
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// display
function displayModuleHtml(imageSrc, imageText) {
  var txtEnding = imageSrc.substr(34);
  var textArr = txtEnding.split(".");
  var text = textArr[0];
  console.log(txtEnding);
  console.log(text);
  return `<a target="_blank" href="/ex01/images/${txtEnding}">
            <img src="/ex01/images/${txtEnding}" alt=${imageText} width="200px"/>
        </a>
      <object
        data="/ex01/texts/${text}.txt"
        type="text/plain"
        width="100%"
        style="height: 300px"
        style="font-family: Arial, Helvetica, sans-serif"
      ></object>`;
}